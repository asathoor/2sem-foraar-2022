/* file: if-eksempler.js */
console.log('hej fra if eksempler');

// bilen kører med
let hastighed = prompt("km/t");

// kører vi for stærkt?
if ( hastighed <= 45 ) {
  resultat.innerHTML = "Do kører for langsomt!"
}

if ( hastighed <= 90 ) {
  resultat.innerHTML = "Yearh vi kører"
}

if ( hastighed >= 130 ) {
  resultat.innerHTML = "Let på speederen!"
}
/*
else {
  resultat.innerHTML = "Do kører derudaf!"
}*/
