const express = require('express')
const fork = require('child_process').fork
const minimist = require('minimist')

const app = express()
app.listen(8080)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const computo = fork('./calc.js')

app.get('/api/randoms', (req, res) => {
  const { cant = 100000000 } = req.query
  computo.on('message', (resultado) => {
    console.log('RESULTADO', resultado)
    res.status(200).json({ resultado })
  })
  computo.send(cant)
})

app.get('/info', (req, res) => {
  const arg = minimist(process.argv.slice(2))
  let html = `<h1>INFORMACIÓN DE SESIÓN</h1><ul>`
  html += `<li>Argumentos de Entrada: ${JSON.stringify(arg)}</li>`
  html += `<li>Path: ${process.cwd()}</li>`
  html += `<li>Sistema Operativo: ${process.platform}</li>`
  html += `<li>ID Proceso: ${process.pid}</li>`
  html += `<li>Versión Node: ${process.version}</li>`
  html += `<li>Carpeta Proyecto: ${process.execPath}</li>`
  html += `<li>Memoria Total Reservada (RSS): ${process.memoryUsage().rss}</li>`
  res.status(400).send(html)
})
