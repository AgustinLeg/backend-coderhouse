const { Router } = require("express");
const Products = require("../controllers/products");

const router = Router();

// Obtener todos los productos
router.get("/", Products.getAll);

// Producto random
router.get("/random", Products.getRandom);

// Producto por ID
router.get("/:id", Products.getBySlug);

// Crear producto
router.post("/", Products.newProduct);

// Actualizar producto
router.put("/:id", Products.updateProduct);

// Eliminar producto
router.delete("/:id", Products.removeProduct);

module.exports = router;
