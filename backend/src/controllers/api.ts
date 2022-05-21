import { Application, Request, Response } from 'express'
import { ProductRouter } from '../routes'
import { AuthRouter } from '../routes/auth'

export const loadApiEndpoints = (app: Application): void => {
  app.get('/', (_req: Request, res: Response) => {
    return res.send('/public/index.html')
  })

  app.use('/api/products', ProductRouter)

  app.use('/api/auth', AuthRouter)
}
