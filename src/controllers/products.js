const { response, request } = require("express");
const fs = require("fs");

const pathFile = "./productos.txt";

const allProducts = (req, res = response) => {
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      throw new Error("Algo salio mal y no tenemos productos!", err);
    }
    res.json(JSON.parse(data));
  });
};

const createProduct = (req, res = response) => {
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      throw new Error("Algo salio mal al crear un producto", err);
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

    fs.writeFile(pathFile, JSON.stringify(products), (err) => {
      if (err) {
        throw new Error("Algo salio mal al crear un producto", err);
      }
      res.json(products);
    });
  });
};

const getProduct = (req = request, res = response) => {
  const id = req.params.id;
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      throw new Error("Algo salio mal al obtener un producto por ID", err);
    }

    const products = JSON.parse(data);
    const product = products.find((product) => product.id === id);

    product
      ? res.json(product)
      : res
          .status(404)
          .send({ message: `there is no product with the id ${id}` });
  });
};

const updateProduct = (req = request, res = response) => {
  const id = req.params.id;
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      throw new Error("Algo salio mal al obtener un producto por ID", err);
    }

    const products = JSON.parse(data);
    const product = products.find((product) => product.id === id);

    product
      ? res.json(product)
      : res
          .status(404)
          .send({ message: `there is no product with the id ${id}` });
  });
};

const deleteProduct = (req = request, res = response) => {
  const id = req.params.id;
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      throw new Error("Algo salio mal al obtener un producto por ID", err);
    }
    const products = JSON.parse(data);
    const product = products.find((product) => product.id === id);

    product
      ? res.json(product)
      : res
          .status(404)
          .send({ message: `there is no product with the id ${id}` });
  });
};

module.exports = {
  allProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
