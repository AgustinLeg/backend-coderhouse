import { Application, Request, Response } from 'express'
import { ProductRouter } from '../routes'
import { AuthRouter } from '../routes/auth'

export const loadApiEndpoints = (app: Application): void => {
  app.get('/', (_req: Request, res: Response) => {
    return res.send('/public/index.html')
  })

  app.get('/info', (_req: Request, res: Response) => {
    const directory = process.cwd();
    const processId = process.pid;
    const nodeVersion = process.version;
    const processTitle = process.title;
    const OS = process.platform;
    const memoryUsage = process.memoryUsage();

    return res.json({
      directory,
      processId,
      nodeVersion,
      processTitle,
      OS,
      memoryUsage
    })
  })  
  app.use('/api/products', ProductRouter)

  app.use('/api/auth', AuthRouter)
}
