const knexSqlite = require('../DB/sqliteConfg')
const knex = require('../DB/mariaConfig')


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
      socket.on("all-products", async() => {
        try {
          const response  = await knex('productos');
          console.log('Productos obtenidos con exito ✅')
          this.io.emit('envioProds',response)
        } catch (error) {
          console.log(error)
          socket.emit("error", "Ups hubo un error");
          return;
        }
      });

      socket.on("new-product", async(payload) => {
        if (!Number(payload.price)) {
          return socket.emit("error", "El precio debe ser un numero");
        }
        try {
          await knex.insert([payload]).from('productos')
          console.log('Producto agregado con exito 🎉')
          const response  = await knex('productos');
          console.log('Productos obtenidos con exito ✅')
          this.io.emit('envioProds',response)
        } catch (error) {
          console.log(error)
          socket.emit("error", "Ups hubo un error");
          return;
        }
      });

      // CHAT
      socket.on("all-messages", async () => {
        try {
          const response  = await knexSqlite('mensajes');
          console.log('Mensajes obtenidos con exito ✅')
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
