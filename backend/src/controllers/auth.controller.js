import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
import { isValidEmail, jwt } from '../utils/index.js'
import { mailNuevoUsuario, logger } from '../services/index.js'

export const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send({ error: 'Faltan datos', status: 400 })
  }
  if (!isValidEmail(email)) {
    return res.status(400).send({ error: 'Email invalido', status: 400 })
  }
  const userDB = await User.findOne({ email })
  if (!userDB) {
    return res.status(400).send({ error: 'Usuario no encontrado', status: 400 })
  }
  if (!bcrypt.compareSync(password, userDB.password)) {
    return res.status(400).send({ error: 'Contraseña incorrecta', status: 400 })
  }
  const token = jwt.signToken(userDB._id, userDB.email)
  return res.json({ token, user: userDB })
}

export const register = async (req, res) => {
  const { name, lastName, email, password } = req.body
  if (
    !name ||
    name.length < 2 ||
    !lastName ||
    lastName.length < 3 ||
    !email ||
    !password
  ) {
    return res.status(400).send({ error: 'Faltan datos', status: 400 })
  }

  if (!isValidEmail(email)) {
    return res.status(400).send({ error: 'Email invalido', status: 400 })
  }

  if (password.length < 6) {
    return res.status(400).send({ error: 'Password invalido', status: 400 })
  }

  const user = await User.findOne({ email })

  if (user) {
    return res.status(400).send({ error: 'Email ya existe', status: 400 })
  }

  const newUser = new User({
    name,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    role: 'USER',
  })

  try {
    await newUser.save()

    const { _id, email } = newUser

    const token = await jwt.signToken(_id, email)
    await mailNuevoUsuario(newUser)

    return res.json({
      token,
      user: newUser,
    })
  } catch (error) {
    logger.error(`Error al crear cuenta : ${error}`)
    return res
      .status(500)
      .send({ error: 'Error al crear usuario', status: 500 })
  }
}

export const CheckUser = async (req, res) => {
  try {
    const user = jwt.isValidToken(req.token, process.env.JWT_SECRET_SEED)
    if (!user) {
      return res.status(403).json({
        message: 'No tienes permiso',
      })
    }
    const userDB = await User.findById(user._id)
    return res.status(200).json(userDB)
  } catch (error) {
    logger.error({ error })
    return res.status(500).json({
      message: 'ERROR',
    })
  }
}
