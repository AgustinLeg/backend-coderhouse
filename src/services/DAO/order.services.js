import ordersMongo from './mongo/orders.mongo.service.js'
import ordersSqlite from './SQLite/orders.sql.service.js'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const { db } = argv || 'sqlite'

let instance
switch (db) {
  case 'sqlite':
    instance = new ordersSqlite()
    break
  case 'mongo':
    instance = new ordersMongo()
    break
}

export default class InstaceFactory {
  static initInstance() {
    return instance
  }
}
