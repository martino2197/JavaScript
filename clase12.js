var Martin = {
  nombre: 'Martin',
  apellido: 'Maceda',
  edad: 28,
  peso: 65
}

console.log(`Al Inicio del ano ${Martin.nombre} pesa: ${Martin.peso}kg`);

//function aumentarPeso (persona) {
//  return persona.peso += 200
//}

const CAMBIO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarPeso = (persona) => persona.peso += CAMBIO_PESO

const adelgazar = (persona) => persona.peso -= CAMBIO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()
  if(random < 0.25) {
    //aumenta de peso
    aumentarPeso(Martin)
  } else if (random < 0.5) {
    // adelgazar
    adelgazar(Martin)
  }
}

console.log(`Al final del ano ${Martin.nombre} pesa: ${Martin.peso.toFixed(1)}kg`);
