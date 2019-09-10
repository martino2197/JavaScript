var contador = 0

const llueve = () => Math.random() < 0.25
var vezVeces = 'Vez'
do {
  contador++
  if(contador>1) {
    vezVeces = 'Veces'
  }
} while (!llueve())

console.log(`Fui a ver si llovia ${contador} ${vezVeces}`);
