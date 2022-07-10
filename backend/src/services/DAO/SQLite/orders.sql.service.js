import { config } from './configSqLite.js'
import knex1 from 'knex'
import { mailNuevaVenta, smsNuevaVenta, wpNuevaVenta } from '../../index.js'

class Orders {
  constructor() {
    this.knex = knex1(config)
  }

  async create(order, res) {
    order.id = await this.knex('ordenes').returning('id').insert(order)
    await mailNuevaVenta(order)
    await wpNuevaVenta(order)
    await smsNuevaVenta(order)
    res(order)
  }

  async getById(id, resOrden) {
    const order = await this.knex.select().from('ordenes').where('id', id)

    resOrden(order)
  }

  async getByEmail(email, resOrdenes) {
    const orders = await this.knex
      .select()
      .from('ordenes')
      .where('email', email)

    resOrdenes(orders)
  }

  async deleteById(id, res) {
    await this.knex('ordenes').where('id', id).del()
    res(`Órden con ID ${id} Eliminada.`)
  }
}

export default Orders
