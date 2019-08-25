//Declaracion de un objeto
var Martin = {
  nombre: 'Martin',
  apellido: 'Maceda',
  edad: 22
}

var Dario = {
  nombre: 'Arturo',
  apellido: 'Rosas',
  edad: 22
}
//variable global y por lo tanto el navegador puede imprimir como window.nombre
function imprimirNombreMayus(persona/*{ nombre }*/) {
  //nombre = persona.nombre.toUpperCase()
  //console.log(persona.nombre.toUpperCase())
  var { nombre } = persona
  console.log(nombre.toUpperCase());
}

imprimirNombreMayus(Martin)
imprimirNombreMayus(Dario)
imprimirNombreMayus({ nombre: 'pepito' })
// Esto manda error imprimirNombreMayus({ apellido: 'pepito' })

function imprimirNombreYEdad(persona) {
  console.log('Hola me llamo ' + persona.nombre + ' y tengo ' + persona.edad + ' anos');
}

imprimirNombreYEdad(Martin)
imprimirNombreYEdad(Dario)
imprimirNombreYEdad({nombre: 'ricks', edad: 23})
