const fs = require("fs");

const knexSqlite = require('../DB/sqliteConfg')

const pathFile = "./productos.txt";

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
      socket.on("all-messages", async () => {
        try {
          const response  = await knexSqlite('mensajes');
          console.log('Mensaje obtenidos con exito ✅')
          this.io.emit('messages',response)
        } catch (error) {
          console.log(error)
          socket.emit("error", "Ups hubo un error");
          return;
        }
      });

      socket.on("new-message", async (payload) => {
        try {
          await knexSqlite.insert([payload]).from('mensajes');
          console.log('Mensaje Creado con exito ✅')

          const messages  = await knexSqlite('mensajes');
          console.log('Mensaje obtenidos con exito ✅')
          this.io.emit('messages',messages)
        } catch (error) {
          console.log(error)
          socket.emit("error", "Ups hubo un error");
          return;
        }
      });

      socket.on("disconnect", () => {
        console.log("usuario desconectado");
      });
    });
  }
}

module.exports = Sockets;
