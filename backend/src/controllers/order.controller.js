import jwt from 'jsonwebtoken'
import { logger } from '../services/index.js'

import Orders from '../services/DAO/order.services.js'
import Products from '../services/DAO/product.services.js'
const orders = Orders.initInstance()
const products = Products.initInstance()

export const createOrder = async (req, res) => {
  const { orderItems, total } = req.body
  try {
    const user = await jwt.verify(req.token, process.env.JWT_SECRET_SEED)
    if (!user) {
      return res.status(403).json({
        message: 'No tienes permiso',
      })
    }
    const productsIds = orderItems.map((product) => product.id)

    products.getById(productsIds, (products) => {
      const backendTotal = orderItems.reduce((prev, current) => {
        const currentPrice = products.find(
          (prod) => prod.id === current.id
        )?.price
        if (!currentPrice) {
          throw new Error('Verifique el carrito de nuevo, producto no existe')
        }

        return currentPrice * current.quantity + prev
      }, 0)

      if (total !== backendTotal) {
        throw new Error('El total no cuadra con el monto')
      }

      // Todo bien hasta este punto
      orders.create({ ...req.body, isPaid: false, user: user._id }, (order) => {
        order.total = Math.round(order.total * 100) / 100

        return res.status(201).json(order)
      })
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      message: 'ERROR',
      error,
    })
  }
}
