import { Router } from 'express'
import { Auth } from '../controllers/index.js'
import { verifyToken } from '../middlewares/auth.middleware.js'

export const AuthRouter = Router()

AuthRouter.get('/user', verifyToken, Auth.CheckUser)

AuthRouter.post('/login', Auth.login)

AuthRouter.post('/register', Auth.register)
