/**
  Løsningsideer
  PRO-1 forår 2022
  PETJ
**/
console.log('alices.js = ok')

/*** SPØRGSMÅL 1

Lad der være et copyright-tegn efterfulgt af dit navn samt dag,
måned, år og klokkeslet i <footer>. Ugedag og måned skal naturligvis
skrives på dansk, shire-kalender,
tysk eller et andet sprog.
Du vælger selv websidens sprog.

- Ide: prøv at se footeren som et objekt.

***/

// globale variabler
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

// footer som objekt
const info = {
  author: 'Per Thykjær Jensen', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  restaurant: 'Alice\'s Restaurant', // Spørgsmål 2
  adresse: 'Volden 234 <br>8000 Aarhus C', // Spørgsmål 2
  telefon: '4243 4445',
  // Metoder
  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Tutorial - imaginary restaurant<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1

/*** SPØRGSMÅL 2

Fremstil en funktion, der kan tilføje restaurantens navn,
adresse og telefonnummer i en <div id="adresse"></div>,
der placeres <footer>. Genbrug denne funktion på alle websider.

Kan med fordel kombineres med objektet, der udvikles til spørgsmål 1.
Se ovenfor, hvor det er sket.

***/

/*** SPØRGSMÅL 3

Skab et array, hvor man kan se medsarbejdernes navne.
Skriv i første omgang navnene i en helt tilfældig rækkeføle.
Brug derefter metoden sort(),
således at man kan læse navnene i alfabetisk orden.

***/

// Medarbejdere
let vis, ansatte = [
  'Alice Thunderbird - ejer',
  'Tjener: Manuel de Cordoba',
  'Tjener: Polly Prentice',
  'Tjener: Sokrates Petersen',
  'Tjener: Valdemar Atterdag',
  'Opvask: Hanne X. Nielsen',
  'Opvask: Frank Jensen',
  'Opvask: Frederik Grundtvig',
  'Opvask: James Anderson',
  'Pedel: Isaac Newton',
  'Tjener: Laylah Smith'
].sort(); // nem måde at sortere på

// tip: snyd sorteringen - hvis Alice hed Xavier
// så sæt et mellemrum foran navnet i variablen!

for (vis in ansatte){
  hvem.innerHTML += '<li>' + ansatte[ vis ] + '</li>';
}

/*** SPØRGSMÅL 4

Hvis tiden tillader det: kod en funktion,
som kan skrive et passende inspirerende citat.
Dette citat vælges tilfældigt fra en liste (=array)
med mindst 5 citater.

Tip: brug Math.random().

***/

let citater = [
  '"All you need is Love." <br> The Beatles',
  '"You don\'t learn from experience. You learn by reflecting on experience" <br> John Dewey',
  '"Jeg lytter efter en hvisken<br>som bærer tavsheden<br>gennem natten." <br> Ulrikka Gernes',
  '"We\'re gonna have a real good time togeter" <br> Lou Reed',
  '"Life is like a mayonaise soda" <br> Lou Reed',
  '"All I ever wanted was to cook the perfect meal."<br>Alice',
  '"You can get anything you want at Alice\'s restaurant" <br> Arlo Guthrie'
];

// selvkørende funktion
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();

//dagensCitat();
