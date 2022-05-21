import { Application, Request, Response } from 'express'
import { ProductRouter } from '../routes'
import { AuthRouter } from '../routes/auth'
import { fork } from 'child_process'
import minimist from 'minimist'

let computo = fork(`./src/utils/calc.ts`)

export const loadApiEndpoints = (app: Application): void => {
  app.get('/', (_req: Request, res: Response) => {
    return res.send('/public/index.html')
  })

  app.get('/info', (_req: Request, res: Response) => {
    const arg = minimist(process.argv.slice(2))
    let html = `<h1>INFORMACIÓN DE SESIÓN</h1><ul>`
    html += `<li>Argumentos de Entrada: ${JSON.stringify(arg)}</li>`
    html += `<li>Path: ${process.cwd()}</li>`
    html += `<li>Sistema Operativo: ${process.platform}</li>`
    html += `<li>ID Proceso: ${process.pid}</li>`
    html += `<li>Versión Node: ${process.version}</li>`
    html += `<li>Carpeta Proyecto: ${process.execPath}</li>`
    html += `<li>Memoria Total Reservada (RSS): ${
      process.memoryUsage().rss
    }</li>`
    res.status(400).send(html)
  })

  app.get('/api/randoms', (req: Request, res: Response) => {
    const { cant = 10 } = req.query
    computo.on('message', (rsdo) => {
      console.log(rsdo)
      res.status(200).send({ rsdo })
      computo.kill()
      computo = fork(`./src/utils/calc.ts`)
    })
    computo.send(cant)
    // res.json({
    //   message: 'ok',
    // })
  })

  app.use('/api/products', ProductRouter)

  app.use('/api/auth', AuthRouter)
}
