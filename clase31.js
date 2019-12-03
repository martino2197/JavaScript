const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }



//callback (cb o cn) un segundo parametro
function obtenerPersonaje(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL, opts, function (character) {console.log(`Hola, yo soy ${character.name}`)

    if (callback){
      callback()
    }
  })
}

//Los request se estan haciendo en serie
//callback hell(infierno de los callback) el codigo se esta volviendo horizontal
obtenerPersonaje(1, function (){
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(7)
      })
    })
  })
})



//Manejando el Orden y el Asincronismo en JavaScript
//Para garantizar el orden de los request, tenemos quehacer las llamadas a las funciones
//utilizando callbacks, pero perdemos el paralelismo de los request.
