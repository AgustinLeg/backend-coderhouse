import productsMongo from './mongo/products.mongo.service.js'
import productsSqlite from './SQLite/products.sql.service.js'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const { db } = argv || 'sqlite'

let instance
switch (db) {
  case 'sqlite':
    instance = new productsSqlite()
    break
  case 'mongo':
    instance = new productsMongo()
    break
}

export default class InstaceFactory {
  static initInstance() {
    return instance
  }
}
