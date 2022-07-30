import { config } from './configSqLite.js'
import knex1 from 'knex'

class Products {
  constructor() {
    this.knex = knex1(config)
    this.random = Math.random()
  }

  async create(product, res) {
    try {
      const productId = await this.knex('products')
        .returning('id')
        .insert(product)
      res({ ...product, ...productId[0] })
    } catch (err) {
      console.log(err)
      res(err)
    }
  }

  async update(product, res) {
    try {
      product.updated_at = new Date()
      await this.knex('products').where('id', product.id).update(product)
      res(product)
    } catch (err) {
      res(err)
    }
  }

  async getById(id, res) {
    try {
      const products = await this.knex
        .select()
        .from('products')
        .where((builder) => builder.whereIn('id', id))

      res(products)
    } catch (err) {
      console.log(err)
      res(err)
    }
  }

  async getBySlug(slug, res) {
    try {
      const prods = await this.knex
        .select()
        .from('products')
        .where('slug', slug)
      res(prods)
    } catch (err) {
      res(err)
    }
  }

  async getAll(res) {
    try {
      const prods = await this.knex.select().from('products')
      res(prods)
    } catch (err) {
      res(err)
    }
  }

  async deleteById(id) {
    try {
      await this.knex('products').where('id', id).del()
    } catch (err) {
      console.log(err)
    }
  }
}

export default Products
