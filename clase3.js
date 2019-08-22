var edad = 22

//edad = edad + 1
edad+=1

var peso = 65
//peso = peso - 2

peso -= 2

var sandwich = 1
peso = peso + sandwich

var jugarFutbol = 3
//peso = peso - jugarFutbol
peso -=jugarFutbol

var precioVino = 200.3

//var total = precioVino*3
//600.9000000000001 -> la manera de almacenar decimales no estan precisa

//var total = precioVino*100*3/100
//600.9
var total = Math.round(precioVino*100*3)/100
//Math es un modulo global, round es redondear

var totalStr = total.toFixed(2)
//"600.90"
var total2 = parseFloat(totalStr)
//600.9

var pizza=8
var persona = 2
var cantidadPorcionesPersona = pizza/persona
