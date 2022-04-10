const knexSqlite = require("./sqliteConfg");

async function createTable(){
  try {
    const exist  = await knexSqlite.schema.hasTable('mensajes');
    if(!exist){
      await knexSqlite.schema.createTable('mensajes', table => {
        table.increments('id').primary();
        table.string('email');
        table.string('mensaje');
        table.string('fecha');
      })
      console.log('Tabla creada 🔥');
      await createMessages();
    } else {
      console.log('La tabla ya existe 🤷‍♂️');
    }
    
  } catch (error) {
    console.log(error)
  }
}

const messages = [
  {email: 'agustin@google.com', mensaje: 'Hola, bienvenido a mi chat', fecha: new Date()},
  {email: 'pedrito@google.com', mensaje: 'Hola', fecha: new Date()},
]

async function createMessages() {
  try {
    const response  = await knexSqlite.insert(messages).from('mensajes');
    console.log(response)
    console.log('Mensaje Creado con exito ✅')
  } catch (error) {
    console.log(error)
  }
}

createTable()