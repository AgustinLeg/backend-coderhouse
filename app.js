const express = require("express");
const fs = require("fs");

const app = express();
app.listen(8080);

// Obtener todos los productos
app.get("/productos", (req, res) => {
  fs.readFile("./productos.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(data);
  });
});

// Crear producto
app.post("/producto", (req, res) => {
  fs.readFile("./productos.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const products = JSON.parse(data);
    const newProduct = {
      title: "Silla",
      price: 3412.67,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      id: "$2a$12$QjV8d483333HI4jBWbEhIyPTkuhuC./etayBW",
    };
    products.push(newProduct);

    fs.writeFile("./productos.txt", JSON.stringify(products), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json(products);
    });
  });
});

// Obtener producto por ID
app.get("/producto/:id", (req, res) => {
  fs.readFile("./productos.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const products = JSON.parse(data);
    const product = products.find((product) => product.id === req.params.id);
    res.json(product);
  });
});
