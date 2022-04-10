const knex = require("./mariaConfig");

async function createTable(){
  try {
    const exist  = await knex.schema.hasTable('productos');
    if(!exist){
      await knex.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('title');
        table.integer('price');
        table.string('thumbnail');
      })
      console.log('Tabla creada 🔥');
      await createProducts();
    } else {
      console.log('La tabla ya existe 🤷‍♂️');
    }
    
  } catch (error) {
    console.log(error)
  }
}

const productos = [
  {
      "title": "Escuadra",
      "price":123,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
      "title": "Calculadora",
      "price": 234,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
      "title": "Globo Terráqueo",
      "price": 345,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  {
      "title": "Mochila",
      "price": 2000,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-512.png"
  }
]

async function createProducts() {
  try {
    const response  = await knex.insert(productos).from('productos');
    console.log(response)
    console.log('Productos Creado con exito ✅')
  } catch (error) {
    console.log(error)
  }
}

createTable()