const cowsay = require('cowsay');
const fs = require('fs');
const intro = require('./intro');
const final = require('./final');

const personaje = "Anuar";
const edad = Math.floor(Math.random() * 100);
const villano = "Juan";
const lugar = "Centraal";
const hobby = "Programar";

const introHistoria = intro.historia(personaje, lugar);
const finalHistoria = final.historia(lugar, hobby);

const historiaCompleta = introHistoria + finalHistoria;

console.log(historiaCompleta);

// muchasPalabras // Camel Case
// muchas-palabras // dash case
// muchas_palabras //snake case

console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));
