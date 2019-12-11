const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }



//callback (cb o cn) un segundo parametro
function obtenerPersonaje(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL, opts, callback)
  //solucionamos el caso de un error en la conexion utilizando calbacks
  .fail(() => {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
  })
}

//MANEJO DE ERRORES CON CALBACKS
//Los request se estan haciendo en serie
//callback hell(infierno de los callback) el codigo se esta volviendo horizontal
obtenerPersonaje(1, function (character){
  console.log(`Hola, yo soy ${character.name}`)

  obtenerPersonaje(2, function (character) {
    console.log(`Hola, yo soy ${character.name}`)

    obtenerPersonaje(3, function (character) {
      console.log(`Hola, yo soy ${character.name}`)

      obtenerPersonaje(4, function (character) {
        console.log(`Hola, yo soy ${character.name}`)

        obtenerPersonaje(5, function (character) {
          console.log(`Hola, yo soy ${character.name}`)

          obtenerPersonaje(7, function (character){
            console.log(`Hola, yo soy ${character.name}`);
          })
        })
      })
    })
  })
})
