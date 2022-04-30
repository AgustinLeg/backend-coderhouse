const Product = require("../models/product");


class ProductController {
  async getAll(req, res) {
    const products = await Product.find()
    res.json(products);
  }

  async getBySlug(req, res) {
    const slug = req.params.slug;
    const productDB = await Product.findOne({ slug });

    if(!productDB) {
      return res.status(404).send({ error: "Producto no encontrado", status: 404 });
    }

    res.json(productDB);
  }

  async newProduct(req, res) {
    const { title, price, thumbnail, stock, slug, tags, description } = req.body;
    if (!price || !thumbnail ||!stock ||!slug ||!tags || !title) {
      return res.status(406).send({ error: "Faltan datos", status: 406 });
    }

    if (!Number(price) || !Number(stock)) {
      return res
        .status(400)
        .send({ error: "El precio solo permite numeros", status: 400 });
    }

    const newProduct =  new Product({title, price, images:[thumbnail], inStock: stock, slug, tags, description});

    await newProduct.save();
    res.json(newProduct)
  }

  async updateProduct(req, res) {
    const id = req.params.id;

    const productoDB = await Product.findByIdAndUpdate(id, {...req.body}).lean();

    if (!productoDB) {
      return res.status(404).send({ error: "Producto no encontrado", status: 404 });
    }

    res.json(productoDB);
    
  }

  async removeProduct  (req, res) {
    const id = req.params.id;
    const productoDB = await Product.findByIdAndDelete(id);
    if (!productoDB) {
      return res.status(404).send({ error: "Producto no encontrado", status: 404 });
    }
    res.json({message: 'Producto eliminado', producto: productoDB._id});
  }
}

module.exports = new ProductController();
