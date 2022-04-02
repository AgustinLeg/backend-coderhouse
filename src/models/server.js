const express = require("express");
const { engine } = require("express-handlebars");

const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.pathProducts = "/api/productos";

    this.engine();

    this.middlewares();

    this.routes();
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
