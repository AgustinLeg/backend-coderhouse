const fs = require("fs");

const pathFile = "./productos.txt";

const getAll = (req, res) => {
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataParsed = JSON.parse(data);
    res.json(dataParsed);
  });
};

const getRandom = (req, res) => {
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataParsed = JSON.parse(data);
    const idxRandom = Math.floor(Math.random() * dataParsed.length);
    const product = dataParsed[idxRandom];
    res.json(product);
  });
};

const getById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataParsed = JSON.parse(data);
    const product = dataParsed.find((product) => product.id === id);

    if (!product)
      return res.status(404).send({ error: "producto no encontrado" });

    res.json(product);
  });
};

const newProduct = (req, res) => {
  const { title, price, thumbnail } = req.body;
  if (!title.length || !price.length || !thumbnail.length) {
    return res.status(406).send({ error: "Faltan datos", status: 406 });
  }

  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const products = JSON.parse(data);
    const id = products.length
      ? Number(products[products.length - 1].id) + 1
      : 1;
    const newProduct = {
      id: id || Math.random(),
      title,
      price,
      thumbnail,
    };

    products.push(newProduct);

    fs.writeFileSync(pathFile, JSON.stringify(products), "utf8");

    res.json({
      newProduct,
    });
  });
};

const updateProduct = (req, res) => {
  const { title, price, thumbnail } = req.body;
  const id = Number(req.params.id);
  if (!title.length || !price.length || !thumbnail.length) {
    return res.status(406).send({ error: "Faltan datos", status: 406 });
  }

  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const products = JSON.parse(data);
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { id, title, price, thumbnail };
      }
      return product;
    });

    fs.writeFileSync(pathFile, JSON.stringify(newProducts), "utf8");

    res.json({
      newProducts,
    });
  });
};

const removeProduct = (req, res) => {
  const id = Number(req.params.id);
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const products = JSON.parse(data);
    const removedProduct = products.find((product) => product.id === id);

    const newProducts = products.filter((product) => product.id !== id);

    fs.writeFileSync(pathFile, JSON.stringify(newProducts), "utf8");

    res.json({
      msg: "Producto eliminado",
      producto: removedProduct,
    });
  });
};

module.exports = {
  getAll,
  getRandom,
  getById,
  newProduct,
  updateProduct,
  removeProduct,
};
