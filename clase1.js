//JS es debilmente tipado, no hay nada que diga que la Variable texto sea de un tipo definido
var nombre = 'Martin', apellido = 'Maceda'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0)
var cantidadLetrasNombre = nombre.length //length es un atributo

var nombreCompleto = nombre + ' ' + apellido

//interpolacion de texto
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
//dentro de las llaves podemos escribir codigo Js

//var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,3)

var ultimaLetra = nombre.charAt(nombre.length-1)
