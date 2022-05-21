import { Router } from 'express'
import { Product } from '../controllers'
import { adminRole } from '../middlewares'

export const ProductRouter = Router()

// Obtener todos los productos
ProductRouter.get('/', Product.getAll)

// Producto por ID
ProductRouter.get('/:slug', Product.getBySlug)

// Crear producto
ProductRouter.post('/', adminRole, Product.newProduct)

// Actualizar producto
ProductRouter.put('/:id', adminRole, Product.updateProduct)

// Eliminar producto
ProductRouter.delete('/:id', adminRole, Product.removeProduct)

