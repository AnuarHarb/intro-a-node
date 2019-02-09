var cowsay = require('cowsay');
var introduccion = require('./introduccion');

let nombre = "Anuar";
let edad = 5;
let villano = "Edgar";
let fraceVaquita = "Surcaré los 7 mares de pasto";

let historia = "Hola, mi nombre es " + nombre + ". Y hoy me enconté con una vaquita pitara que decía: " + fraceVaquita;

console.log(introduccion.historia(nombre, edad, villano));
console.log(nudo.historia(nombre, edad, villano));
console.log(desenlace.historia(nombre, edad, villano));

console.log(cowsay.say({
  text : "Hola Esther, ¡Soy una vaquita pirtata!",
  e : "x-o",
  T : "v "
}));
