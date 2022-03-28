const express = require("express");
const { engine } = require("express-handlebars");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const Sockets = require("./sockets");

const path = require("path");

const fs = require("fs");

const pathFile = "./productos.txt";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.pathProducts = "/api/productos";

    this.engine();

    this.middlewares();

    this.routes();

    // Http server
    this.server = new HttpServer(this.app);

    // Configuraciones de sockets
    this.io = new IOServer(this.server);

    this.initSocket();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(express.static("./public"));

    this.app.set("views", path.resolve("./src/views"));
    this.app.set("view engine", "hbs");
  }

  routes() {
    this.app.use(this.pathProducts, require("../routes/ProductsRouter"));
    this.app.get("/productos", (req, res) => {
      fs.readFile(pathFile, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const dataParsed = JSON.parse(data);
        res.render("productos", { data: dataParsed });
      });
    });
    this.app.get("/", (req, res) => {
      res.render("formulario");
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
