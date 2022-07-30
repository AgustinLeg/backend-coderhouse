import './config.js'
import { User } from '../../../models/index.js'
import { jwt } from '../../../utils/index.js'
import { mailNuevoUsuario } from '../../notification.services.js'

class Users {
  constructor() {
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.getById = this.getById.bind(this)
    this.getByMail = this.getByMail.bind(this)
    this.delete = this.delete.bind(this)
  }

  async create(user, res) {
    try {
      const newUser = await User.create(user)
      await newUser.save()
      const { _id, email } = newUser
      newUser.token = await jwt.signToken(_id, email)
      await mailNuevoUsuario(newUser)
      res(newUser)
    } catch (err) {
      res(err)
    }
  }

  async update(user, res) {
    try {
      const response = await User.findByIdAndUpdate(user._id, user)
      res(response)
    } catch (err) {
      res(err)
    }
  }

  async getById(id, res) {
    try {
      const response = await User.findById(id)
      res(response)
    } catch (err) {
      res(err)
    }
  }

  async getByMail(email, res) {
    try {
      const response = await User.findOne({ email })
      res(response)
    } catch (err) {
      res(err)
    }
  }

  async delete(id, res) {
    try {
      await User.findByIdAndDelete(id)
      res(`Usuario con ID ${id} Eliminado ¡¡¡¡`)
    } catch (err) {
      res(err)
    }
  }
}

export default Users
