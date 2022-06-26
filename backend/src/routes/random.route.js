import { Router } from 'express'
import { fork } from 'child_process'
import { logger } from '../utils/index.js'

export const RandomRouter = Router()

let calculo = fork('./src/utils/calc.js')

RandomRouter.get('/', (req, res) => {
  const { cantidad = 1000000 } = req.query

  calculo.on('message', (resultado) => {
    res.send(`
         <h1>process ${process.pid} proxy nginx | ${process.argv[2] || ''}</h1>
         <pre>${JSON.stringify(resultado, null, 2)}</pre>
      `)
    calculo.kill()
    calculo = fork('./utils/random.js')
  })

  calculo.send(cantidad, (err) => {
    logger.error('err', err)
  })
})
