const express = require('express')
const fork = require('child_process').fork

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
