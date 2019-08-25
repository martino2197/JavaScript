var nombre = "Martin"
//variable global y por lo tanto el navegador puede imprimir como window.nombre
function imprimirNombreMayus(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreMayus(nombre)
//
