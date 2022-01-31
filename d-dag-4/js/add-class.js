/**
 * file: add-class.js
 **/

// 'use strict'

/*
Add class js syntax:

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");
}

https://www.w3schools.com/howto/howto_js_add_class.asp
*/


/*
Remove class

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");
}
*/

// querySelector: id, class, name, etc.
let detSker = document.querySelector('#herSkerDet');

// add a class
let AddAnima = function() {
  detSker.classList.add("animated"); // animation from
  setTimeout(AnimaRemove, 3000); // vent 4 sek.
}

// remove a class
let AnimaRemove = function() {
  detSker.classList.remove("animated");
}

// Eventlistener
detSker.addEventListener("click", AddAnima);

// CLASSES
// Fungerer lidt som et array
let theGreens = document.getElementsByClassName('green');
let gEl;

// several elements loop each out:
for (gEl in theGreens) {
  try {
    theGreens[gEl].style.backgroundColor = 'pink';
    let rndT = Math.random() * 50;
    let rndL = Math.random() * 60;
    let rota = Math.random() * 360;
    theGreens[gEl].style.top = rndT + 'vh';
    theGreens[gEl].style.left = rndL + 'vw';
    theGreens[gEl].style.transform = 'rotate(' + rota + 'deg)';
  } catch(err) {
    // error handler
    // console.log(err);
  }
}
