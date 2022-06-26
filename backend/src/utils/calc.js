function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

function calculo(cant) {
  const numeros = []
  const valores = {}
  for (let i = 0; i < cant; i++) {
    numeros.push(getRandomInt(1, 1000))
  }
  numeros.map((val) => (valores[val] = numeros.filter((v) => v === val).length))
  return valores
}

process.on('message', (msg) => {
  const resultado = calculo(msg)
  process.send(resultado)
})

export default calculo
