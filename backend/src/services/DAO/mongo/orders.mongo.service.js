import './config.js'
import { Order as OrdersModel } from '../../../models/index.js'
import { mailNuevaVenta, smsNuevaVenta, wpNuevaVenta } from '../../index.js'

class Orders {
  constructor() {
    this.create = this.create.bind(this)
    this.getById = this.getById.bind(this)
    this.getByEmail = this.getByEmail.bind(this)
    this.delete = this.delete.bind(this)
  }

  async create(order, res) {
    try {
      const orderDB = await OrdersModel.create(order)
      await orderDB.save()
      await mailNuevaVenta(order)
      await wpNuevaVenta(order)
      await smsNuevaVenta(order)
      res(orderDB)
    } catch (err) {
      console.log('ERRORRRRRRRR ', err)
      res(err)
    }
  }

  async getById(id, res) {
    try {
      const response = await OrdersModel.find({ _id: id })
      res(response)
    } catch (err) {
      res(err)
    }
  }

  async getByEmail(email, res) {
    try {
      const response = await OrdersModel.findOne({ 'user.email': email })
      res(response)
    } catch (err) {
      res(err)
    }
  }

  async delete(id, res) {
    try {
      await OrdersModel.deleteById(id)
      res(`Orden con ID ${id} Eliminada.`)
    } catch (err) {
      res(err)
    }
  }
}

export default Orders
