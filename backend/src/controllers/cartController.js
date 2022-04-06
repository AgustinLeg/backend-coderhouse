const fs = require("fs");
const pathFile = "./cart.txt";

class Cart {

  getCartProducts(req,res){
    const id = req.params.id;
    
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      
      const dataParsed = JSON.parse(data);
      const cartSelect = dataParsed.find(cart => cart.id === id);

      if(!cartSelect){
        res.json({message: "No existe el carrito"});
        return
      }
      res.json({data: cartSelect.productos});
    });

  }
  
  createCart = (req, res) => {
    const { producto } = req.body;

    if (!Number(producto.price)) {
      return res
        .status(400)
        .send({ error: "El precio solo permite numeros", status: 400 });
    }

    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const productos = [producto]
      const dataParsed = JSON.parse(data);
      const id = dataParsed.length
        ? Number(dataParsed[dataParsed.length - 1].id) + 1
        : 1;
      const newCart = {
        id: id.toString(),
        timestamp: new Date(),
        productos,
      };

      dataParsed.push(newCart);

      fs.writeFileSync(pathFile, JSON.stringify(dataParsed), "utf8");
      res.json({status: 200, message: "Producto agregado al carrito", id});
    });
  };

  addProductToCart = (req, res) => {
    const id = req.params.id
    const {producto} = req.body;
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const dataParsed = JSON.parse(data);
      const cartSelect = dataParsed.find(cart => cart.id === id);

      if(!cartSelect){
        res.json({message: "No existe el carrito"});
        return
      }

      const cartUpdated = dataParsed.map((cart) =>{
        if(cart.id === id){
          cart.productos = [...cart.productos, {...producto, timestamp: new Date()}]
          return cart
        }
        return cart
      });

      fs.writeFileSync(pathFile, JSON.stringify(cartUpdated), "utf8");

      res.json({
        msg: "Producto agregado al carrito",
        data: cartUpdated,
      });
    });
  }

  deleteCart = (req, res) => {
    const id = req.params.id;
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const dataParsed = JSON.parse(data);
      const cartSelect = dataParsed.find(cart => cart.id === id);

      if(!cartSelect){
        res.json({message: "No existe el carrito"});
        return
      }

      const cartUpdated = dataParsed.filter((product) => product.id !== id);

      fs.writeFileSync(pathFile, JSON.stringify(cartUpdated), "utf8");

      res.json({
        msg: "Carrito eliminado",
        data: cartSelect,
      });
    });

  }

  deleteProductFromCart = (req, res) => {
    const {id, id_prod} = req.params
    
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const dataParsed = JSON.parse(data);
      const cartSelect = dataParsed.find(cart => cart.id === id);

      if(!cartSelect){
        res.json({message: "No existe el carrito"});
        return
      }

      const productSelect = cartSelect.productos.find((product) => product.id !== id_prod);
      if(!productSelect){
        res.json({message: "No existe el producto en el carrito"});
        return
      }

      const productsUpdated = cartSelect.productos.filter((prod) => prod.id !== id_prod);

      const cartUpdated = dataParsed.map(cart => {
        if(cart.id === id){
          cart.productos = productsUpdated;
          return cart
        }
        return cart
      })
      fs.writeFileSync(pathFile, JSON.stringify(cartUpdated), "utf8");

      res.json({
        msg: "Productos actualizado",
        data: cartUpdated,
      });
    });
  }
}

module.exports = new Cart();

// id, timestamp(carrito), producto: { id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }
