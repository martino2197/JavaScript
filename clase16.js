var signo = prompt('Cual es tu signo?')
console.log(signo);


switch (signo) {
  case 'acuario':
  case 'Acuario':
    console.log('Tu energía viene con una dosis extra de creatividad y adrenalina, sos social por excelencia, funcionás muy intensamente y buscás recargar baterías a solas para volver a salir a lo social con más energía. Sos universal, aérea y genial.');
    break;

  case 'picis':
  case 'Picis':
    console.log('Tu energía navega como experta en el mundo del sentir y la emoción, te conectás con el todo, experimentás lo divino y envolvés silenciosamente todo lo que existe con tu energía mágica. Sabés del reino interior y las hazañas de todos los días con las dimensiones más elevadas.');
    break;

  case 'aries':
  case 'Aries':
      console.log('Salís al mundo de manera enérgica y radiante y te movés por la vida con atrevimiento y pasión, sin medir riesgos, sin miedos. Tu función es manifestarte, gestionar inicios, ser.');
      break;

  case 'tauro':
  case 'Tauro':
      console.log('No hay obstáculos que no puedas atravesar. Esta energía ama las cosas más simples de la vida y, a la vez, las más exquisitas. Tu función es darle forma al impulso inicial de la existencia.');
      break;
  case 'geminis':
  case 'Geminis':
      console.log('Tu naturaleza intermitente y social es capaz de transmitir hasta lo más indescifrable, vos te abrís a la celebración de la comunicación y de la diversidad. La clave es no quedar atrapada, es la garantía que necesitás para involucrarte en lo que sea.');
      break;

  case 'cancer':
  case 'Cancer':
      console.log('Te sujetás a tus raíces, a tu historia, a tu energía sensible que todo lo contiene y que a todos nos contiene. Hacés reverencia a tu pasado y reflejás la vivencia de lo que se esconde por debajo de nuestro mundo emocional más profundo.');
      break;
  case 'leo':
  case 'Leo':
      console.log('Las leonas ejercen un liderazgo natural que cumplen con un espíritu generoso y potente. Tu energía da calor, llama a la inspiración y magnetiza hasta a los más desprevenidos. Sos la heroína del Zodíaco, pero igual mirás a ver si te miran.');
      break;

  case 'virgo':
  case 'Virgo':
      console.log('No te permitís desperdiciar vitalidad, energía ni tiempo en intereses que te saquen de pista. Sos sencilla (no simple), discreta, reflexiva, cuidadosa. Hay mucha más emoción en tu mundo interior de la que mostrás.');
      break;

  case 'libra':
  case 'Libra':
      console.log('Sabés cómo hacer sentir muy bien a los demás, por eso necesitás que absolutamente nadie quede excluido en ningún juego. Libra logra crear un equilibrio sutil incluso entre las fuerzas más polarizadas del planeta.');
      break;

  case 'escorpio':
  case 'Escorpio':
      console.log('Sos experta en atravesar los momentos más difíciles con total sabiduría. Escorpio nos enseñan a resurgir de las cenizas con su incomparable e intensa energía sanadora.');
      break;

  case 'sagitario':
  case 'Sagitario':
      console.log('Sos visionaria y encendida, te comprometés profundamente con lo que pensás, buscás significados y vas detrás de aquello que te asegure bienestar. Tu mirada telescópica y universal eleva el nivel de cualquier discusión.');
      break;

  case 'capricornio':
  case 'Capricornio':
      console.log('Tu capacidad de organización te convierte en un ser experimentado y sereno. Tenés la virtud de tener el sentido más práctico de todo el planeta. Eso sí, no tolerás los excesos y necesitás elegir muy bien con quién compartir lo más privado.');
      break;

  default:
  console.log('No es un signo Zodiacal');
  break;
}
