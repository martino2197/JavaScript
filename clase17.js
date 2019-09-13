/******Clase 17 Introducción a arrays ******/

/* Los arrays son estructuras que nos permiten organizar elementos dentro de una collección.
Estos elementos pueden ser números, strings, booleanos, objetos, etc.*/

var jose ={
    nombre: 'jose',
    apellido: 'calvano',
    estatura: 1.70
}
var elias ={
    nombre: 'elias',
    apellido: 'zigaran',
    estatura: 1.60
}
var juan ={
    nombre: 'juan',
    apellido: 'caceres',
    estatura: 1.68
}
var maria ={
    nombre: 'maria',
    apellido: 'gomez',
    estatura: 1.33
}

// definicion del ARRAY
var personas = [jose, elias, juan, maria];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.estatura} m`);
}
