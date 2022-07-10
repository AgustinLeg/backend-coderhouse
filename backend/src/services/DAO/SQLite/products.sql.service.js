import { config } from './configSqLite.js'
import knex1 from 'knex'

class Products {
  constructor() {
    this.knex = knex1(config)
    this.random = Math.random()
  }

  async create(product, res) {
    try {
      product.id = await this.knex('productos').returning('id').insert(product)
      res(product)
    } catch (err) {
      console.log(err)
      res(err)
    }
  }

  async update(product, res) {
    try {
      product.updated_at = new Date()
      await this.knex('productos').where('id', product.id).update(product)
      res(product)
    } catch (err) {
      res(err)
    }
  }

  async getById(id, res) {
    try {
      const prod = await this.knex.select().from('productos').where('id', id)
      res(prod[0])
    } catch (err) {
      res(err)
    }
  }

  async getBySlug(slug, res) {
    try {
      const prods = await this.knex
        .select()
        .from('productos')
        .where('slug', slug)
      res(prods)
    } catch (err) {
      res(err)
    }
  }

  async getAll(res) {
    try {
      const prods = await this.knex.select().from('productos')
      res({ productos: prods, random: this.random })
    } catch (err) {
      res(err)
    }
  }

  async deleteById(id) {
    try {
      await this.knex('productos').where('id', id).del()
    } catch (err) {
      console.log(err)
    }
  }
}

export default Products
