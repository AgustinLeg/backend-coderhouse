const cluster = require('cluster')
const nCpus = require('os').cpus().length
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const crypto = require('crypto')

const randomRoute = require('./routes/randomRoute')
const infoRoute = require('./routes/info')

const PORT = process.argv[2] || 3000
const modoCluster = process.argv[3] === 'CLUSTER'

if (modoCluster && cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`)
  for (let i = 0; i < nCpus; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`)
    cluster.fork()
  })
} else {
  dotenv.config()
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))

  app.use('/info-comprimido', infoRoute)
  app.use('/info', infoRoute)
  app.use('/api/random', randomRoute)

  app.get('/', (req, res) => {
    const primes = []
    const max = Number(req.query.max) || 1000
    for (let i = 0; i < max; i++) {
      if (isPrime(i)) primes.push(i)
    }
    res.json(primes)
  })

  const users = {}

  app.get('/getUsers', (req, res) => {
    res.json({ users })
  })

  app.get('/newUser', (req, res) => {
    let userName = req.query.userName || ''
    let password = req.query.password || ''

    if (!userName || !password || users[userName]) return res.sendStatus(400)

    const salt = crypto.randomBytes(128).toString('base64')
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512')

    users[userName] = { salt, hash }

    res.status(200).json(users)
  })

  app.get('/auth-bloq', (req, res) => {
    let userName = req.query.userName || ''
    let password = req.query.password || ''

    if (!userName || !password || !users[userName]) process.exit(-1)

    const { salt, hash } = users[userName]

    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512')

    if (crypto.timingSafeEqual(hash, encryptHash)) {
      res.sendStatus(200)
    } else {
      process.exit(-1)
    }
  })

  app.get('/auth-nobloq', (req, res) => {
    let userName = req.query.userName || ''
    let password = req.query.password || ''

    if (!userName || !password || !users[userName]) process.exit(-1)

    crypto.pbkdf2(
      password,
      users[userName].salt,
      10000,
      512,
      'sha512',
      (err, hash) => {
        if (users[userName].hash.toString() === hash.toString()) {
          res.sendStatus(200)
        } else {
          process.exit(-1)
        }
      }
    )
  })

  const server = app.listen(PORT, () =>
    console.log(
      `🔥 Server started on port http://localhost:${PORT}-PID ${process.pid}`
    )
  )
  server.on('error', (err) => console.log(err))
}

function isPrime(num) {
  if ([2, 3].includes(num)) return true
  else if ([2, 3].some((n) => num % n == 0)) return false
  else {
    let i = 5,
      w = 2
    while (i ** 2 <= num) {
      if (num % i == 0) return false
      i += w
      w = 6 - w
    }
  }
  return true
}
