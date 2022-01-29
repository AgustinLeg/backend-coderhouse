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

const createProduct = (req = request, res = response) => {
  const { title, price, thumbnail } = req.body;
  if (title.length  || price.length || thumbnail.length) {
    return res.status(406).send({ error: "Faltan datos", status: 406 });
  }
  const products = JSON.parse(fs.readFileSync(pathFile, "utf8"));
  const id = products.length
    ? Number(products[products.length - 1].id) + 1
    : 1;
  const newProduct = {
    id,
    title,
    price,
    thumbnail,
  };

  products.push(productoNuevo);

  fs.writeFileSync(pathFile, JSON.stringify(productos), "utf8");

  res.json({
    newProduct,
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
  const { title, price, thumbnail } = req.body;
  const id = Number(req.params.id);
  const products = JSON.parse(fs.readFileSync(pathFile, "utf8"));
  const existProduct = products.find((product) => product.id === id);
  if (!existProduct) {
    return res.status(404).send({ error: "producto no encontrado" });
  }
  const newProducts = products.map((product) => {
    if (product.id === id) {
      return { ...product, title, price, thumbnail };
    }
    return product;
  });

  fs.writeFileSync(pathFile, JSON.stringify(newProducts), "utf8");

  res.json({
    newProducts,
  });
};

const deleteProduct = (req = request, res = response) => {
  const id = Number(req.params.id);
  const products = JSON.parse(fs.readFileSync(pathFile, "utf8"));
  const existProduct = products.find((product) => product.id === id);
  if (!existProduct) {
    return res.status(404).send({ error: "producto no encontrado" });
  }
  const newProducts = products.filter((product) => product.id !== id);

  fs.writeFileSync(pathFile, JSON.stringify(newProducts), "utf8");

  res.json({
    newProducts,
  });
};

module.exports = {
  allProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
