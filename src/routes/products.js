const { Router } = require("express");
const {
  allProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

const router = Router();

// Obtener todos los productos
router.get("/", allProducts);

// Crear producto
router.post("/", createProduct);

// Obtener producto
router.get("/:id", getProduct);

// Actualizar producto
router.put("/:id", updateProduct);

// Eliminar producto
router.delete("/:id", deleteProduct);

module.exports = router;
