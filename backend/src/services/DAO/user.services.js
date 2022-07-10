import usersMongo from './mongo/users.mongo.service.js'
import UsersSqlite from './SQLite/users.sql.service.js'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const { db } = argv || 'sqlite'

let instance
switch (db) {
  case 'sqlite':
    instance = new UsersSqlite()
    break
  case 'mongo':
    instance = new usersMongo()
    break
}

export default class InstaceFactory {
  static initInstance() {
    return instance
  }
}
