# D-dag-9: JSON

## JSON i JavaScript

Svarer til JavaScript objekter:

~~~~
let myJson = {
  name:"John",
  lastName: "Deer"
}
~~~~

JSON ser sådan ud, her er der anførselstegn omkring properties:

~~~~
{
  "name":"John",
  "lastName": "Deer"
}
~~~~

## Arrays

JSON kan indeholde arrays, sådan:

{
"name"    :"John",
"age"     :30,
"models"  : ["One", "Twhoo", "Fhire"],
"colors"  : ["green", "blue", "#ffcc23"]
}

## Parse JSON

JSON er en streng, der kan "parses" (transformeres) til et objekt:

~~~~
const obj = JSON.parse('{"name":"John", "lastName":"Deer"}');
~~~~

Herefter vil obj opføre sig som et JavaScript objekt.

## Fetch() teoretisk

Med fetch() kan du hente JSON fra en server online.

~~~~
let file = "https://myServer/myFile.json";

fetch ( file )
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);
~~~~

Hvis filen indeholder tekst, kan den vises sådan; men hvis der er tale om JSON-data, så skal filen parses.

## Fetch() i praksis

Fetch virker kun når filerne ligger sammen på en server. Derfor skal du uploade filerne til din webserver eller arbejde på en lokal server (fx kan du bruge [Mamp](https://www.mamp.info/en/windows/), [Xampp](https://www.apachefriends.org/download.html) eller installere en Apache-server på [Linux](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview) ).

### Filen med JSON-data

~~~~
{
"name"    : "John",
"age"     : 30,
"models"  : ["One", "Twhoo", "Fhire"],
"colors"  : ["green", "blue", "#ffcc23"]
}
~~~~


### Fetch() data

**Vigtigt:** Filerne skal ligge på samme server. Fetch() skal afvikles på en webserver.

~~~~
const myJson = "json-ex.json"

  /* Denne kode virker kun på en server */

  fetch(myJson)
    .then(response => {
       return response.json();
    })
    .then(data => {
      // vis en property
      tekst.innerHTML = data.name + '<br>';

      // loop indhold fra et array ud
      for (x in data.colors){
        tekst.innerHTML += data.colors[x] + '<br>';
      }
    });
~~~~
