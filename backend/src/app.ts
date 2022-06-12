import express from 'express'
import path from 'path'
import cors from 'cors'
import compression from 'compression'
// import logger from '../loggers'

import { loadApiEndpoints } from './controllers'

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
)

app.get('/suma', (req, res) => {
  const { n1 = '', n2 = '' } = req.query as { n1: string; n2: string }

  if (!parseInt(n1) || !parseInt(n2)) {
    // logger.debug('n1 o n2 no son numeros')

    // logger.error('n1 o n2 no son numeros')

    res.status(400).send('n1 o n2 no son numeros')
    return
  }
  const result = parseInt(n1) + parseInt(n2)

  // logger.info(`suma de ${n1} + ${n2} = ${result}`)

  res.send(`${result}`)
})

// compression
app.use(compression())

app.on('error', (err) => console.log(err))

// API endpoints
loadApiEndpoints(app)

app.use((_req, res) => {
  // logger.warn('Ruta no encontrada')
  res.send('404')
})

export default app
