const dotenv = require('dotenv')
const express = require('express')
const http = require('http')
const infoRoute = require('./routes/info.js')
const randomRoute = require('./routes/randomRoute.js')
const notFound = require('./middlewares/notFound.js')

dotenv.config()

const app = express()
const serverHttp = http.createServer(app)
const PORT = process.argv[2] || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/info', infoRoute)
app.use('/api/random', randomRoute)

app.get('/', (req, res) => {
  res.send(`
  <h1>estamos en Server-master en puerto ${process.argv[2] || PORT}</h1>
  <a href="/info">ir a info</a><br />
  <h5>balance de carga en /api/random en puertos 8082, 8083 ,8084, 8085</h5>
  <a href="/api/random">ir a api/random</a>
  `)
})

// --Ruta mock productos
// app.use('/api/productos-test', mockProductRoutes)

// --404 not Found
app.use(notFound)

serverHttp.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto ${PORT}`)
})
