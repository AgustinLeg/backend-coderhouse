import { Product, Order } from '../models/index.js'

// import { jwt } from '../utils/index.js'
import jwt from 'jsonwebtoken'
import {
  logger,
  mailNuevaVenta,
  smsNuevaVenta,
  wpNuevaVenta,
} from '../services/index.js'

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

    const dbProducts = await Product.find({ _id: { $in: productsIds } })
    const backendTotal = orderItems.reduce((prev, current) => {
      const currentPrice = dbProducts.find(
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
    const newOrder = new Order({ ...req.body, isPaid: false, user: user._id })
    newOrder.total = Math.round(newOrder.total * 100) / 100

    await newOrder.save()

    await mailNuevaVenta(newOrder)
    await wpNuevaVenta(newOrder)
    await smsNuevaVenta(newOrder)

    return res.status(201).json(newOrder)
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      message: 'ERROR',
      error,
    })
  }
}
