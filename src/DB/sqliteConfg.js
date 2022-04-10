const _knex = require('knex');
const config = {
  client:'better-sqlite3',
  connection: {
    filename:'./src/DB/mensajes.sqlite'
  },
  useNullasDefault: true
}


const knexSqlite =_knex(config)

module.exports = knexSqlite