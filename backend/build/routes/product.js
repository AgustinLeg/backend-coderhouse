"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.ProductRouter = (0, express_1.Router)();
// Obtener todos los productos
exports.ProductRouter.get('/', controllers_1.Product.getAll);
// Producto por ID
exports.ProductRouter.get('/:slug', controllers_1.Product.getBySlug);
// Crear producto
exports.ProductRouter.post('/', middlewares_1.adminRole, controllers_1.Product.newProduct);
// Actualizar producto
exports.ProductRouter.put('/:id', middlewares_1.adminRole, controllers_1.Product.updateProduct);
// Eliminar producto
exports.ProductRouter.delete('/:id', middlewares_1.adminRole, controllers_1.Product.removeProduct);
