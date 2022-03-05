const express = require("express");
const fs = require("fs");

const app = express();
app.listen(8080);

app.get("/", (req, res) => {
  res.send(
    "<h1><a href='https://recondite-celestial-ravioli.glitch.me/productoRandom'>Producto Random</a></h1> </br><h1><a href='https://recondite-celestial-ravioli.glitch.me/productos'>Todos los productos</a></h1>"
  );
});

// Obtener todos los productos
app.get("/productos", (req, res) => {
  fs.readFile("./productos.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataParsed = JSON.parse(data);
    res.json(dataParsed);
  });
});

// Producto random
app.get("/productoRandom", (req, res) => {
  fs.readFile("./productos.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataParsed = JSON.parse(data);
    const idxRandom = Math.floor(Math.random() * dataParsed.length);
    const product = dataParsed[idxRandom];
    res.json(product);
  });
});
