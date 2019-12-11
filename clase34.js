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
  .then(character1 => {
    console.log(`El personaje 1 es ${character1.name}`)
    //devolvemos otra promesa (estamos encadenandolas)
    return obtenerPersonaje(2)
  })
  .then(character2 => {
    console.log(`El personaje 2 es ${character2.name}`)
    return obtenerPersonaje(3)
  })
  .then(character3 => {
    console.log(`El personaje 3 es ${character3.name}`)
    return obtenerPersonaje(4)
  })
  .then(character4 => {
    console.log(`El personaje 4 es ${character4.name}`)
    return obtenerPersonaje(5)
  })
  .then(character5 => {
    console.log(`El personaje 5 es ${character5.name}`)
    return obtenerPersonaje(6)
  })
  .then(character6 => {
    console.log(`El personaje 6 es ${character6.name}`)
  })
  .catch(onError)

//ENCADENAMOS LAS PROMESAS UNA DEBAJO DE LA OTRA, EL CATCH ES EL MISMO PARA TODAS
//cUANDO SE USAN PROMESAS LA EJECUCION DE LAS LLAMADAS NO SE HACEN
//DE MANERA ANIDADA SINO DE MANERA ENCADENADA, AL MISMO NIVEL UNA DEBAJO
//DE LA OTRA, LO QUE HACE QUE EL CODIGO SEA MUCHO MAS LEGIBLE Y MANTENIBLE.
