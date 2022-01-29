const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.pathProducts = "/api/productos";

    this.routes();
  }

  routes() {
    this.app.use(this.pathProducts, require("../routes/products"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port " + this.port);
    });
  }
}

module.exports = Server;
