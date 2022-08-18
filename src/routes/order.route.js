import { Router } from 'express'
import { Order } from '../controllers/index.js'
import { verifyToken } from '../middlewares/index.js'

export const OrderRouter = Router()

OrderRouter.get('/', verifyToken, Order.getOrder)

OrderRouter.post('/', verifyToken, Order.createOrder)
