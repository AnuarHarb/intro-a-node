module.exports = {
  historia: function(personaje, edad, villano) {

    if(edad > 18) {
      return `${personaje} era una habitante de un pequeño pueblo. Como apenas tenía ${edad} años, no podía ir a las aventuras de caza con sus mayores. Pero el sabía que algun día sería tan grande y fuerte como ${villano}`
    } else {
      return `${personaje} era una habitante de un pequeño pueblo. A sus ${edad} años, era uno de los más fuertes y valientes aventureros. Pero el sabía que había alguien que los superaba, ${villano} el malote.`
    }
  }
}
