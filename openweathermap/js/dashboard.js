/*
@datasæt hentes sådan:

http://api.openweathermap.org/data/2.5/weather?
q=Aarhus
&lang=da
&units=metric
&appid=201d090c9cceacfc8931df89310ebfbb
*/

/* Saml alt i en funktion */
let GetWeather = function(city) {

  // get the weather data via query URI
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=da&units=metric&appid=94df7f9ff51ea5f99470094fe37eeb0e").then(response => {
    return response.json();
  }).then(data => {

    // Work with JSON data here
    console.log(data); // show what's in the json

    // solnedgang
    var sunsetMs = data.sys.sunset * 1000 // dato-objektet har brug for millisek. Derfor * 1000
    var sunset = new Date(sunsetMs)
    var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();

    // nul foran minutter
    if (sunset.getMinutes() < 10) {
      etNul = "0"
    } else {
      etNul = ""
    }

    // solopgang
    var sunriseMs = data.sys.sunrise * 1000
    var sunrise = new Date(sunriseMs)

    if (sunrise.getMinutes() < 10) {
      srNul = "0"
    } else {
      srNul = ""
    }

    // Tilføjer resultatet
    result.innerHTML += `
            <div class="weatherInfo">
              <h1> ${data.name} </h1>

              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt=""/>
              <p> Her er ${data.weather[0].description}.</p>

              <aside>
                  <p>Solopgang: ${sunrise.getHours()}:${srNul}${sunrise.getMinutes()}<br>
                  Solnedgang: ${sunset.getHours()}:${etNul}${sunset.getMinutes()} <br>
                  <span class="small">(NB: Dansk tid!)</span>

                  </p>
              </aside>
            </div>
            `
  }).catch(err => {
    // Do something for an error here
    console.log('There was an error: ' + err);
  });

} // ends GetWeather()

// Use the function :-)
GetWeather("Aarhus")
GetWeather("Regina")
GetWeather("Oslo")

GetWeather("Hamburg")
GetWeather("Washington")
GetWeather("Paris")

GetWeather("Nuuk")
GetWeather("Sydney")
GetWeather("London")
