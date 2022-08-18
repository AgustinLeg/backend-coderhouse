import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'
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
  GraphqlRouter,
} from './routes/index.js'

import { PORT, whiteList } from './config/index.js'
import { logger } from './services/index.js'
import { SocketController } from './controllers/index.js'

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

// compression
app.use(compression())

// API endpoints
app.get('/', (_req, res) => {
  return res.send('/public/index.html')
})
app.use('/api/products', ProductRouter)
app.use('/api/auth', AuthRouter)
app.use('/api/order', OrderRouter)
app.use('/api/info', InfoRouter)
app.use('/api/randoms', RandomRouter)
app.use('/api/graphql', GraphqlRouter)

// api not found
app.use('*', (req, res) => {
  logger.warn(`${req.method}  - ${req.originalUrl} - Not found.`)
  res.status(400).json({ message: `Bad request` })
})

// Error handler
app.on('error', (error) => {
  logger.error(error)
})

// Create http server
const httpServer = createServer(app)

// Create Socket connection
const io = new Server(httpServer, {
  cors: {
    origin: whiteList,
  },
})

// Socket controller
io.on('connection', (socket) => {
  SocketController(socket, io)
})

export { app, httpServer }
