const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (character) {console.log(`Hola yo soy, ${character.name}`);
  //console.log(arguments)
  //imprime los parametros que recibe la funcion
}

function obtenerPersonaje(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)

//Asincronismo en su maximo esplendor, no sabemos en que orden nos van a llegar
//las respuesta, depende del servidor y de cuanto tarda en responder cada uno de los request



//$.get() nos permite hacer un request y es un metodo que pertence a jquery
//Callback es una funcion que se va ejecutar en algun futuro y no sabemos cuando
//Un callback es una función que se pasa a otra función como un argumento.
//Esta función se invoca, después, dentro de la función externa para completar alguna acción.
