const { Router } = require("express");
const Products = require("../controllers/products");

const router = Router();

// Obtener todos los productos
router.get("/", Products.getAll);

router.get("/test", Products.getTest);

// Producto random
router.get("/random", Products.getRandom);

// Producto por ID
router.get("/:id", Products.getById);

// Crear producto
router.post("/", Products.newProduct);

// Actualizar producto
router.put("/:id", Products.updateProduct);

// Eliminar producto
router.delete("/:id", Products.removeProduct);

module.exports = router;
