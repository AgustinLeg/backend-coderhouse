import { config } from './configSqLite.js'
import knex1 from 'knex'

class Messages {
  constructor() {
    this.knex = knex1(config)
    this.random = Math.random()
  }

  async create(message, res) {
    try {
      const { id, ...msg } = message
      msg.uid = id
      const messageId = await this.knex('messages').returning('id').insert(msg)
      res({ ...msg, ...messageId[0] })
    } catch (err) {
      console.log(err)
      res(err)
    }
  }

  async getAll(res) {
    try {
      const message = await this.knex.select().from('messages')
      res(message)
    } catch (err) {
      res(err)
    }
  }

  async deleteById(id) {
    try {
      await this.knex('messages').where('id', id).del()
    } catch (err) {
      console.log(err)
    }
  }
}

export default Messages
