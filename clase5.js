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
function imprimirNombreMayus( { nombre } ) {
  //nombre = persona.nombre.toUpperCase()
  //console.log(persona.nombre.toUpperCase())
  console.log(nombre.toUpperCase());
}

imprimirNombreMayus(Martin)
imprimirNombreMayus(Dario)
imprimirNombreMayus({ nombre: 'pepito' })
// Esto manda error imprimirNombreMayus({ apellido: 'pepito' })
