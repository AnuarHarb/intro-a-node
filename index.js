// Modulos
const cowsay = require('cowsay');
const fs = require('fs');
const intro = require('./intro');
const final = require('./final');

//Variables de generacion
const personaje = "Anuar";
const edad = Math.floor(Math.random() * 100);
const villano = "Juan";
const lugar = "Centraal";
const hobby = "Programar";

fs.readFile('personajes.txt', 'utf-8', function(err, contenido){
  if(err) {
    throw err;
  }

  const personajes = contenido.split(',');
  const numeroPesonaje = Math.floor(Math.random() * personajes.length);
  const personajeRandom = personajes[numeroPesonaje];

  const historiaCompleta = juntarHistoria(personajeRandom);

  //Escribir historia
  console.log(historiaCompleta);

  fs.writeFile('historia.txt', historiaCompleta, function(err) {
    if(err) {
      throw err;
    }
  });
});

// Partes de historia
function juntarHistoria(personaje) {
  const introHistoria = intro.historia(personaje, lugar);
  const finalHistoria = final.historia(personaje, lugar);
  const historiaCompleta = introHistoria + finalHistoria;
  return historiaCompleta;
}

console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));
