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

const CAMBIO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarPeso = (persona) => persona.peso += CAMBIO_PESO
const adelgazar = (persona) => persona.peso -= CAMBIO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = Martin.peso - 3
var dias = 0

while (Martin.peso > META) {
  if (comeMucho()) {
    //aumentaPeso
    aumentarPeso(Martin)
  }
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(Martin)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${Martin.nombre} adelgazo 3 kg`);
