import express from 'express'
import path from 'path'
import cors from 'cors'
import compression from 'compression'
import { fileURLToPath } from 'url'
import {
  ProductRouter,
  AuthRouter,
  InfoRouter,
  RandomRouter,
  OrderRouter,
} from './routes/index.js'

import { PORT, whiteList } from './config/index.js'
import { logger } from './services/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create Express server
const app = express()

// Express configuration
app.set('port', PORT)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: whiteList }))

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
)

app.get('/suma', (req, res) => {
  const { n1 = '', n2 = '' } = req.query

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

app.on('error', (err) => logger.error(err))

// API endpoints
app.get('/', (_req, res) => {
  return res.send('/public/index.html')
})
app.use('/api/products', ProductRouter)
app.use('/api/auth', AuthRouter)
app.use('/api/order', OrderRouter)
app.use('/api/info', InfoRouter)
app.use('/api/randoms', RandomRouter)

app.use('*', (req, res) => {
  logger.warn(`${req.method}  - ${req.originalUrl} - INEXISTENTE.`)
  res.status(400).json({ descripcion: `Ruta ${req.originalUrl} Inexistente.` })
})

export default app
