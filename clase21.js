//////////////////////////Las clases en JavaScript (prototipos)////////////
//No hay herencia

// persona() es el prototipo
function persona(nombre, apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
  // esta implicito que se retorna el objeto: return this
}

//creamo la funcion saludar para nuestro prototipo
persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona.prototype.soyAlto = function (){
  if (this.estatura > 1.70) {
      console.log(`Soy Alto por que mido ${this.estatura}`)
  } else {
    console.log(`soy chaparro`);
}
//Persona.prototype.soy//Alto = function () {
//    (this.altura >= 1.8) ? console.log('es Alto') : console.log('es bajo');
//}

var Martin = new persona('Martin', 'Maceda', 1.72)
//new sirve para crear el nuevo objeto y a ese objeto se le asigna el prototipo
Martin.saludar() //Hola me llamo Martin
var Salma = new persona('Salma', 'lovewood', 1.60)
var Arturo = new persona('Arturo', 'Rosas', 1.78)

Arturo.saludar()

Martin.soyAlto()
Salma.soyAlto()
