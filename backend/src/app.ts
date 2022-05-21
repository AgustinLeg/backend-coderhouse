import express from 'express'
import path from 'path'
import cors from 'cors'

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

app.on('error', (err) => console.log(err))

// API endpoints
loadApiEndpoints(app)

export default app
