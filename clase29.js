const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (character) {console.log(`Hola yo soy, ${character.name}`);
  //console.log(arguments)
  //imprime los parametros que recibe la funcion
}
$.get(LUKE_URL, opts, onPeopleResponse)
//$.get() nos permite hacer un request y es un metodo que pertence a jquery


//Callback es una funcion que se va ejecutar en algun futuro y no sabemos cuando
//Un callback es una función que se pasa a otra función como un argumento.
//Esta función se invoca, después, dentro de la función externa para completar alguna acción.
