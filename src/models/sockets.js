const fs = require("fs");

const pathFile = "./productos.txt";
const messageFile = "./mensajes.txt";

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("usuario conectado");

      // Productos
      socket.on("all-products", () => {
        fs.readFile(pathFile, "utf8", (err, data) => {
          if (err) {
            console.error(err);
            socket.emit("error", "Ups hubo un error");
            return;
          }
          const productos = JSON.parse(data);
          this.io.emit("envioProds", productos);
        });
      });

      socket.on("new-product", ({ title, price, thumbnail }) => {
        if (!Number(price)) {
          return socket.emit("error", "El precio debe ser un numero");
        }
        fs.readFile(pathFile, "utf8", (err, data) => {
          if (err) {
            console.error(err);
            socket.emit("error", "Ups hubo un error");
            return;
          }
          const products = JSON.parse(data);
          const id = products.length
            ? Number(products[products.length - 1].id) + 1
            : 1;
          const newProduct = {
            id: id.toString(),
            title,
            price,
            thumbnail,
          };

          products.push(newProduct);

          fs.writeFileSync(pathFile, JSON.stringify(products), "utf8");
          this.io.emit("envioProds", products);
        });
      });

      // CHAT
      socket.on("all-messages", () => {
        fs.readFile(messageFile, "utf8", (err, data) => {
          if (err) {
            console.error(err);
            socket.emit("error", "Ups hubo un error");
            return;
          }
          const messages = JSON.parse(data);
          this.io.emit("messages", messages);
        });
      });

      socket.on("new-message", (payload) => {
        fs.readFile(messageFile, "utf8", (err, data) => {
          if (err) {
            console.error(err);
            socket.emit("error", "Ups hubo un error");
            return;
          }
          const messages = JSON.parse(data);
          const id = messages.length
            ? Number(messages[messages.length - 1].id) + 1
            : 1;
          const newMessage = {
            id: id.toString(),
            ...payload,
          };

          messages.push(newMessage);

          fs.writeFileSync(messageFile, JSON.stringify(messages), "utf8");
          this.io.emit("messages", messages);
        });
      });

      socket.on("disconnect", () => {
        console.log("usuario desconectado");
      });
    });
  }
}

module.exports = Sockets;
