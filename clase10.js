var Martin = {
  nombre: 'Martin',
  apellido: 'Maceda',
  edad: 22,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  drone: true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero === true){
      console.log('Ingeniero')
  } else {
    console.log('No es Ingeniero');
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.drone) {
    console.log('De Drones')
  }

}

imprimirProfesiones(Martin)

function imprimirMayorDeEdad(persona){
  if (persona.edad >= 18){
    console.log(`${persona.nombre} es Mayor de edad, tiene ${persona.edad} anos`);
  } else {
    console.log(`${persona.nombre} es Menor de edad, tiene ${persona.edad} anos`);
  }
}

imprimirMayorDeEdad(Martin)
