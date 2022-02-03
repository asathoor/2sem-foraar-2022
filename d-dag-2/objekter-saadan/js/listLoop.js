/**
* listLoop.js
* Demonstration af lister og loops
**/
console.log('svar fra listLoop.js');

// Array (= liste)
let visFarver,farver = [
  'red',
  'green',
  '#ce11d8'
]

// test
console.log( farver ); // viser objektet
console.log( '\n\nSorted colors\n\n' + farver.sort() );

// McGrath: 71 - forenklet syntaks i loop
for (visFarver in farver) {
  console.log( farver[ visFarver ] );
  // prøv at loope nogen farveprøver ud:
  document.getElementById('content').innerHTML += `
    <div style="background-color: ${ farver[ visFarver ] }; width: 45px; height: 45px;"></div>
    <p>
      Color: ${ farver[ visFarver ] }
    </p>
  `
}

// traditionelt for loop
/*
for (i=0; i<farver.length; i++) {
  farver[i];
}
*/
