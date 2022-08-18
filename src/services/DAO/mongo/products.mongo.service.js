import './config.js'
import { Product } from '../../../models/index.js'
import logger from '../../../services/logger.services.js'

class Products {
  constructor() {
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.getById = this.getById.bind(this)
    this.getBySlug = this.getBySlug.bind(this)
    this.getAll = this.getAll.bind(this)
    this.deleteById = this.deleteById.bind(this)
    this.random = Math.random()
  }

  async create(product, res) {
    try {
      const response = await Product.create(product)
      res(response)
    } catch (err) {
      logger.info(err)
    }
  }

  async update(product, res) {
    try {
      const response = await Product.findByIdAndUpdate(
        product.id,
        product
      ).lean()
      console.log(response)
      res(product)
    } catch (err) {
      res(err)
    }
  }

  async getById(id, res) {
    try {
      const response = await Product.findById(id)
      res({ ...response.toJSON() })
    } catch (err) {
      res(err)
    }
  }

  async getBySlug(slug, res) {
    try {
      const response = await Product.findOne({ slug })
      res(response)
    } catch (err) {
      res(err)
    }
  }

  async getAll(res) {
    try {
      const products = await Product.find()
      res(products)
    } catch (err) {
      res(err)
    }
  }

  async deleteById(id, res) {
    try {
      const response = await Product.findOneAndDelete({ slug: id })
      res(response)
    } catch (err) {
      res(err)
    }
  }
}

export default Products
