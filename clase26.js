class Persona {
  constructor(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
  }

  saludar(fn){
    var nombre = this.nombre
    var apellido = this.apellido
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    //comprobamos si se paso un parametro (null y 0 o un ''   siempre devuelven false)
    if (fn) {
      fn(nombre, apellido, false)
    }
  }

  soyAlto(){
    return this.estatura > 1.70
  }
}


class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura) {
    super(nombre, apellido, estatura)
  }

  saludar(fn){
    var {nombre, apellido} = this
    //var nombre = this.nombre
    //var apellido = this.apellido
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
    //comprobamos si se paso un parametro (null y 0 o un ''   siempre devuelven false)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`No sabia que eras desarrollador`);
  }
}

var Martin = new Persona('Martin', `Maceda`, 1.72)
var Arturo = new Desarrollador(`Arturo`, `Rosas`, 178)
var Elvira = new Persona(`Elvira`, `Alarcon`, 1.53)

Elvira.saludar()
Martin.saludar(responderSaludo)
Arturo.saludar(responderSaludo)
