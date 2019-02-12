const cowsay = require('cowsay');
const fs = require('fs');

const introduccion = require('./introduccion');
const nudo = require('./nudo');
const desenlace = require('./desenlace');

const nombre = "Anuar";
const edad = 5;
const villano = "Edgar";
const fraceVaquita = "Surcaré los 7 mares de pasto";

fs.readFile('alumnos.txt', 'utf-8', function(err, text) {
  if(err) throw err
  let alumnos = text.split(',');
  const random = Math.floor(Math.random() * alumnos.length);
  const personaje = alumnos[random];
  crearHistoria(personaje);
});

function crearHistoria(personaje) {
  const inicio = introduccion.historia(personaje, edad, villano);
  const mitad = nudo.historia(personaje, edad, villano);
  const final = desenlace.historia(personaje, edad, villano);

  const vaquita = cowsay.say({
    text : "Hola Esther, ¡Soy una vaquita pirtata!",
    e : "x-o",
    T : "v "
  });

  const historia = inicio + mitad + final + '\n' + vaquita;
  guardarHistoria(historia);

  console.log(historia);
}

function guardarHistoria(historia) {
  fs.writeFile("historia.txt", historia, function(err) {
    if(err) throw err
    console.log("Se ha guardad esta épica historia");
  });
}
