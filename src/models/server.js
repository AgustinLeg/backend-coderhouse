const express = require("express");
const { engine } = require("express-handlebars");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const mongoStore = require("connect-mongo");
const Sockets = require("./sockets");

const path = require("path");

const { faker } = require("@faker-js/faker");
const passport = require("passport");
const session = require("express-session");

const auth = require("../middlewares/auth");
const { dbConnection } = require("../database");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.pathProducts = "/api/productos";
    this.pathProductsTest = "/api/productos-test";
    this.pathAuth = "/api/auth";

    this.contectarDB();

    this.engine();

    this.middlewares();

    this.routes();

    // Http server
    this.server = new HttpServer(this.app);

    // Configuraciones de sockets
    this.io = new IOServer(this.server);

    this.initSocket();
  }

  async contectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(express.static("./public"));

    this.app.set("views", path.resolve("./src/views"));
    this.app.set("view engine", "hbs");

    this.app.use(
      session({
        store: mongoStore.create({
          mongoUrl: process.env.MONGO_URI,
          options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },
        }),
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  routes() {
    this.app.use(this.pathProducts, require("../routes/ProductsRouter"));
    this.app.use(
      this.pathProductsTest,
      require("../routes/ProductsRouterTest")
    );
    this.app.use(this.pathAuth, require("../routes/AuthRouter"));
    this.app.get("/productos", (req, res) => {
      let productosFalsos = [];
      for (let i = 0; i < 5; i++) {
        const newProducto = {
          id: faker.random.number({ min: 1, max: 100 }),
          title: faker.commerce.productName(),
          price: faker.commerce.price(),
          thumbnail: faker.image.image(),
        };
        productosFalsos.push(newProducto);
      }
      res.render("productos", { data: productosFalsos });
    });
    this.app.get("/", auth, (req, res) => {
      res.render("formulario", { user: req.user });
    });

    this.app.get("/login", (req, res) => {
      if (req.session.user) {
        return res.redirect("/");
      }
      res.render("login");
    });
    this.app.get("/signup", (req, res) => {
      res.render("signup");
    });
    this.app.get("/failSignup", (req, res) => {
      res.render("failSignup");
    });
    this.app.get("/failLogin", (req, res) => {
      res.render("failLogin");
    });
  }

  engine() {
    this.app.engine(
      "hbs",
      engine({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: path.resolve("./src/views/layouts"),
        partialsDir: path.resolve("./src/views/partials/"),
      })
    );
  }

  initSocket() {
    new Sockets(this.io);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`🚀 Server started on http://localhost:${this.port}`);
    });
  }

  onError() {
    this.app.on("error", (err) => console.log(err));
  }
}

module.exports = Server;
