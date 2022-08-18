import jwt from 'jsonwebtoken'
import { logger } from '../services/index.js'

import Orders from '../services/DAO/order.service.js'
import Products from '../services/DAO/product.service.js'
const orders = Orders.initInstance()
const products = Products.initInstance()

export const createOrder = async (req, res) => {
  const { orderItems, total } = req.body
  try {
    const user = jwt.verify(req.token, process.env.JWT_SECRET_SEED)
    if (!user) {
      return res.status(403).json({
        message: 'No tienes permiso',
      })
    }

    const productsDB = []

    await Promise.all(
      orderItems.map(
        async (product) =>
          await products.getById(product.id, (product) => {
            productsDB.push(product)
          })
      )
    )

    const backendTotal = orderItems.reduce((prev, current) => {
      const currentPrice = productsDB.find(
        (prod) => prod.id.toString() === current.id
      )?.price
      if (!currentPrice) {
        throw new Error('Verifique el carrito de nuevo, producto no existe')
      }

      return currentPrice * (current.quantity || 1) + prev
    }, 0)

    if (total !== backendTotal) {
      console.log({ total, backendTotal })
      throw new Error('El total no cuadra con el monto')
    }

    // Todo bien hasta este punto
    orders.create({ ...req.body, isPaid: false, user: user._id }, (order) => {
      console.log({ order })
      order.total = Math.round(Number(order.total) * 100) / 100

      return res.status(201).json(order)
    })
  } catch (error) {
    console.log(error)
    logger.error(error)
    return res.status(500).json({
      message: 'ERROR',
      error,
    })
  }
}

export const getOrder = async (req, res) => {
  const user = jwt.verify(req.token, process.env.JWT_SECRET_SEED)
  if (!user) {
    return res.status(403).json({
      message: 'No tienes permiso',
    })
  }

  await orders.getByEmail(user._id, (orders) => {
    return res.status(200).json(orders)
  })
}
