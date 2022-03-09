const { Router } = require("express");
const {
  getAll,
  getRandom,
  getById,
  newProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/products");

const router = Router();

// Obtener todos los productos
router.get("/", getAll);

// Producto random
router.get("/random", getRandom);

// Producto por ID
router.get("/:id", getById);

// Crear producto
router.post("/", newProduct);

// Actualizar producto
router.put("/:id", updateProduct);

// Eliminar producto
router.delete("/:id", removeProduct);

module.exports = router;
