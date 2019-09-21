//La herencia como tal no existe en JavaScript, no hay clases, hay prototipos
//Si a un objeto como Arturo utiliza el metodo soyAlto()
//Si no esta en su prototipo, ira a buscarlo al prototipo de ese prototipos
//si no lo encuentra llegara hasta objetc que es como el prototipo
//de todas las funciones (un prototipo padre)

function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  //asignamos la funcion constructora de la clase claseHija
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
  // esta implicito que se retorna el objeto: return this
}

heredaDe(Desarrollador, Persona)

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = () => {

  return this.estatura > 1.70
}

function Desarrollador(nombre, apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
}

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

/**
 * Apuntes finales.
 *
 * La búsqueda de propiedades en JavaScript comienza en las propias propiedades del objeto, y si este nombre de propiedad no se encuentra, consulta las propiedades del objeto especial __proto__. Este proceso se realiza de manera recursiva.
 *
 * La propiedad especial __proto__ se define cuando un objeto es construido: su valor corresponde con la propiedad prototype del constructor. Así, la expresión new Foo() crea un objeto con la propiedad __proto__ == Foo.prototype. En consecuencia, los cambios producidos en Foo.prototype alteran la búsqueda de propiedades de todos los objetos creados con new Foo().
 *
 * Todo objeto tiene una propiedad __proto__, así como una propiedad prototype. Por lo tanto, los objetos pueden relacionarse a través de esta propiedad.
 *
 * genaro._proto_ = Desarrollador.prototype;
 * genaro._proto_._proto_ = Persona.prototype;
 * genaro._proto_._proto_._proto_ = Object.prototype;
 * genaro._proto_._proto_._proto_._proto_ = null;
 */
