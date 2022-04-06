const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.pathProducts = "/api/productos";
    this.pathCart = "/api/carrito";

    this.middlewares();

    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  routes() {
    this.app.use(this.pathProducts, require("../routes/ProductRouter"));
    this.app.use(this.pathCart, require("../routes/CartRouter"));
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
