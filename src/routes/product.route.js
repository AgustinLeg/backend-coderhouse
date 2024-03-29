import { Router } from 'express'
import { Product } from '../controllers/index.js'
// import { adminRole } from '../middlewares/index.js'
import { logger } from '../services/index.js'

export const ProductRouter = Router()

// Obtener todos los productos
ProductRouter.get('/', Product.getAll)

// Producto por ID
ProductRouter.get('/:id', Product.getById)

// Crear producto
ProductRouter.post('/', Product.newProduct)

// Actualizar producto
ProductRouter.put('/:id', Product.updateProduct)

// Eliminar producto
ProductRouter.delete('/:id', Product.removeProduct)

// Test
ProductRouter.get('/test', async (req, res) => {
  logger.info(`Get ProductosTest/`)
  await Product.getAll(req, res)
})
