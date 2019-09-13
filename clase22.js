//////////////////////////Las clases en JavaScript (prototipos)////////////
//No hay herencia

// persona() es el prototipo
function persona(nombre, apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
  // esta implicito que se retorna el objeto: return this
}

//Las arrow funtion tienen el detalle de que cambian el contexto
//para this, pasa a ser el contexto de window("la clase global")
//es por ello que nos encontramos con errores de undefined para thiss
persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona.prototype.soyAlto = () => {
  debugger
  return this.estatura > 1.70
}
//Persona.prototype.soy//Alto = function () {
//    (this.altura >= 1.8) ? console.log('es Alto') : console.log('es bajo');
//}

var Martin = new persona('Martin', 'Maceda', 1.72)
var Salma = new persona('Salma', 'lovewood', 1.60)
var Arturo = new persona('Arturo', 'Rosas', 1.78)
//new sirve para crear el nuevo objeto y a ese objeto se le asigna el prototipo
