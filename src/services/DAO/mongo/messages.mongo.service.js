import './config.js'
import { Message } from '../../../models/index.js'
import logger from '../../logger.services.js'

class Messages {
  constructor() {
    this.create = this.create.bind(this)
    this.getAll = this.getAll.bind(this)
    this.deleteById = this.deleteById.bind(this)
    this.random = Math.random()
  }

  async create(message, res) {
    try {
      const response = await Message.create(message)
      res(response)
    } catch (err) {
      logger.info(err)
    }
  }

  async getAll(res) {
    try {
      const messages = await Message.find().sort({ createdAt: -1 }).limit(10)
      res(messages)
    } catch (err) {
      res(err)
    }
  }

  async deleteById(id, res) {
    try {
      const response = await Message.findByIdAndDelete(id)
      res(response)
    } catch (err) {
      res(err)
    }
  }
}

export default Messages
