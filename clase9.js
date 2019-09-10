var x = 4, y = '4'
//x == y
//true x == y
//x === y
//false
// SIEMPRE UTILIZAR EL TRIPLE IGUAL

var Martin = {
  nombre: 'Martin'
}

var otraPersona = {
  nombre: 'Martin'
}
//otraPersona
//{nombre: "Arturo"}
//Martin == otraPersona
//false

var otraPersona2 = Martin
//Martin === otraPersona2
//true

//objeto literal, estamos creando un objeto nuevos
//var otraPersona2 = {
  //...Martin
//}
//Martin == otraPersona2
//false

//Martin
//{nombre: "Martin"}
//otraPersona2
//{nombre: "Martin"}
//otraPersona2.nombre = 'Arturo"
//otraPersona2.nombre = "Arturo"
//"Arturo"
//Martin
//{nombre: "Arturo"}
