import { config } from './configSqLite.js'
import knex1 from 'knex'
import { mailNuevaVenta, smsNuevaVenta, wpNuevaVenta } from '../../index.js'

class Orders {
  constructor() {
    this.knex = knex1(config)
  }

  async create(order, res) {
    const { shippingAddress, orderItems, ...newOrder } = order
    order.id = await this.knex('orders').returning('id').insert(newOrder)[0]?.id
    for await (const item of orderItems) {
      await this.knex('order_items').insert(item)
    }
    await this.knex('shipping_address').insert(shippingAddress)
    await mailNuevaVenta(order)
    await wpNuevaVenta(order)
    await smsNuevaVenta(order)
    res(order)
  }

  async getById(id, resOrden) {
    const order = await this.knex.select().from('orders').where('id', id)

    resOrden(order)
  }

  async getByEmail(email, res) {
    const orders = await this.knex.select().from('orders').where('email', email)

    res(orders)
  }

  async deleteById(id, res) {
    await this.knex('orders').where('id', id).del()
    res(`Órden con ID ${id} Eliminada.`)
  }
}

export default Orders
