import { config } from './configSqLite.js'
import knex1 from 'knex'
const knex = knex1(config)

class Users {
  constructor() {
    this.knex = knex1(config)
  }

  async create(user, res) {
    user.created_at = new Date()
    user.id = await this.knex('users').returning('id').insert(user)[0]?.id
    res(user)
  }

  async update(user, res) {
    user.updated_at = new Date()
    await this.knex('users').where('id', user.id).update(user)
    res(user[0])
  }

  async getById(id, res) {
    const user = await this.knex.select().from('users').where('id', id)
    res(user[0])
  }

  async getByMail(email, res) {
    const user = await knex.select().from('users').where('email', email)
    console.log(user[0])
    res(user[0])
  }

  async delete(id, res) {
    await this.knex('users').where('id', id).del()
    res(`Usuario con ID ${id} Eliminado ¡¡¡¡`)
  }
}

export default Users
