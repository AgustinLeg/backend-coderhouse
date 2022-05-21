import { Router } from 'express'
import { Auth } from '../controllers'

export const AuthRouter = Router()

AuthRouter.post('/login', Auth.login)

AuthRouter.post('/register', Auth.register)

// todo: renew token
// AuthRouter.post('/renew', Auth.renewToken)