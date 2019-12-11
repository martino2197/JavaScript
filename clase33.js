//Promesas: Pensemos en las promesas como valores que aun no conocemos
//La mayoria de los navegadores soportan las promesas, podemos usar un
//Polifil; detecta si el navegador tiene soporte para las promesas y puede
//crear la clase de las promesas por nosotros.

//Estados De Las promesas
//---Pending: es cuando creamos una promesa
//---Fulfilled: pasa a este estado cuando la promesa se resuelve exitosamente
//---Reject: pasa a este estado cuando ocurre algun error al resolverse

//Las promesas pueden resolverse de manera Asincrona y Sincrona

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }



//callback (cb o cn) un segundo parametro


function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(URL, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })

}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (character) {
    console.log(`El personaje 1 es ${character.name}`)
  })
  .catch(onError)
