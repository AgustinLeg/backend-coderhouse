const { Router } = require("express");
const Products = require("../controllers/products");

const router = Router();

// Obtener todos los productos
router.get("/", Products.getTest);

module.exports = router;
