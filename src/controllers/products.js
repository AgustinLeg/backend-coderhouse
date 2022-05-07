const fs = require("fs");
const { faker } = require("@faker-js/faker");

const pathFile = "./productos.txt";

class Products {
  getAll(req, res) {
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const dataParsed = JSON.parse(data);
      res.json(dataParsed);
    });
  }
  getRandom(req, res) {
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
  }
  getById(req, res) {
    const id = req.params.id;
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
  }

  newProduct(req, res) {
    const { title, price, thumbnail } = req.body;
    if (!title || !price || !thumbnail) {
      return res.status(406).send({ error: "Faltan datos", status: 406 });
    }

    if (!Number(price)) {
      return res
        .status(400)
        .send({ error: "El precio solo permite numeros", status: 400 });
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
        id: id.toString(),
        title,
        price,
        thumbnail,
      };

      products.push(newProduct);

      fs.writeFileSync(pathFile, JSON.stringify(products), "utf8");
      res.redirect("/productos");
    });
  }

  updateProduct(req, res) {
    const { title, price, thumbnail } = req.body;
    const id = req.params.id;
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
  }

  removeProduct(req, res) {
    const id = req.params.id;
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const products = JSON.parse(data);
      const removedProduct = products.find((product) => product.id === id);

      if (!removedProduct) {
        return res
          .status(404)
          .send({ error: `No encontramos el producto con el ID: ${id}` });
      }

      const newProducts = products.filter((product) => product.id !== id);

      fs.writeFileSync(pathFile, JSON.stringify(newProducts), "utf8");

      res.json({
        msg: "Producto eliminado",
        producto: removedProduct,
      });
    });
  }

  getTest(req, res) {
    let productosFalsos = [];
    for (let i = 0; i < 5; i++) {
      const newProducto = {
        id: faker.random.number({ min: 1, max: 100 }),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        thumbnail: faker.image.image(),
      };
      productosFalsos.push(newProducto);
    }
    // fs.writeFile(pathFile, str, (err) => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });
    res.json(productosFalsos);
  }
}

module.exports = new Products();
