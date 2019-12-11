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

//colocamos la palbra clave async para poder utilizar el await
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    //toda la parte asyncrona va dentro de un bloque try catch
    try{
      //await detiene la ejecucion donde se coloca, hasta que las promesas sean resueltas
      var personajes = await Promise.all(promesas)
      personajes.map(personaje => {console.log(`El personaje es ${personaje.name}`)})
    } catch (id) {
      onError(id)
    }
  }

obtenerPersonajes()

//ASYNC-AWAIT es la manera mas simple y clara de realizar tareas asincronas.
//Await detiene la ejecucion del programa hasta que todas las promesas sean resueltas.
//Para poder utilizar esta forma, hay que colocar async antes de la definicion de la funcion,
//y encerrar el llamado a Promises.all() dentro de un bloque try...catch.
