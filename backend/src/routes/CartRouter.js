const {Router} = require("express");
const Cart = require("../controllers/cartController");

const router = Router();

router.get('/:id/productos', Cart.getCartProducts)

router.post('/', Cart.createCart )

router.post('/:id/productos', Cart.addProductToCart)

router .delete('/:id', Cart.deleteCart)

router.delete('/:id/productos/:id_prod', Cart.deleteProductFromCart)

module.exports = router