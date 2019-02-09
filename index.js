var cowsay = require('cowsay');
const intro = require('./intro');

let personaje = "Anuar";
let villano = "Juan";
let lugar = "Centraal";
let hobby = "Programar";

console.log(intro.historia);

console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));
