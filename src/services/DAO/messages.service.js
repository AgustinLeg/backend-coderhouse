import messagesMongo from './mongo/messages.mongo.service.js'
import messagesSqlite from './SQLite/messages.sql.service.js'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const { db } = argv || 'sqlite'

let instance
switch (db) {
  case 'sqlite':
    instance = new messagesSqlite()
    break
  case 'mongo':
    instance = new messagesMongo()
    break
}

export default class InstaceFactory {
  static initInstance() {
    return instance
  }
}
