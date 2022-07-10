import { config } from './configSqLite.js'
import knex1 from 'knex'
const knex = knex1(config)

class Users {
  constructor() {
    this.knex = knex1(config)
  }

  async create(user, res) {
    user.created_at = new Date()
    user.id = null
    user = await this.knex('usuarios').insert(user)
    res(user)
  }

  async update(user, res) {
    user.updated_at = new Date()
    await this.knex('usuarios').where('id', user.id).update(user)
    res(user)
  }

  async getById(id, res) {
    const user = await this.knex.select().from('usuarios').where('id', id)
    res(user)
  }

  async getByMail(email, res) {
    const user = await knex.select().from('usuarios').where({ email })
    res(user)
  }

  async delete(id, res) {
    await this.knex('Usuarios').where('id', id).del()
    res(`Usuario con ID ${id} Eliminado ¡¡¡¡`)
  }
}

export default Users
