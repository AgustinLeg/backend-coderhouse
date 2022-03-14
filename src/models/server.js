const express = require("express");

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
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.pathProducts, require("../routes/products"));
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
    this.app.set("views", path.resolve("./src/views"));
    this.app.set("view engine", "pug");
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server started on http://localhost:${this.port}`);
    });
  }

  onError() {
    this.app.on("error", (err) => console.log(err));
  }
}

module.exports = Server;
