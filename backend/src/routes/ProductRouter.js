const { Router } = require("express");
const Product = require("../controllers/productController");
const { adminRole } = require("../middlewares/validateRole");

const router = Router();

// Obtener todos los productos
router.get("/", Product.getAll);


// Producto por ID
router.get("/:slug", Product.getBySlug);

// Crear producto
router.post("/", adminRole, Product.newProduct);

// Actualizar producto
router.put("/:id", adminRole, Product.updateProduct);

// Eliminar producto
router.delete("/:id", adminRole, Product.removeProduct);

module.exports = router;
