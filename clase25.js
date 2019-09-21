
class Persona {
  constructor(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto(){
    return this.estatura > 1.70
  }
}


class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura) {
    super(nombre, apellido, estatura)
  }
  /**
  constructor(nombre, apellido, estatura, tiempo){

    super(nombre,apellido,estatura);

    this.nombre_desarrollador = nombre; // Atributo heredado nombre guardado en un atributo nuevo.
    this.apellido_desarrollador  = apellido; // Atributo heredado apellido guardado en un atributo nuevo.
    this.estatura_desarrollador  = estatura; // Atributo heredado estatura guardado en un atributo nuevo.

    this.tiempo_de_desarrollador = tiempo; // Nuevo atributo
    **/
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
  }
}
