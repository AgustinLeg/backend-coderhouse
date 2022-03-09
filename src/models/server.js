const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.pathProducts = "/api/productos";

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
