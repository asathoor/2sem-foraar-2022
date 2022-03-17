console.log("hej fra vikinger.js")

const token = "pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g"
const mapStyle = "mapbox://styles/asathoor/cl0utivlp00jl14qi4gto0iyl"
const vikinger = "js/vikinger.geojson"

// 11/56.1347/10.2701

// Concerning the Map
mapboxgl.accessToken = token
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: mapStyle, // style URL
  center: [10.2701, 56.1347], // starting position [lng, lat]
  zoom: 11, // starting zoom
  pitch: 60,
  customAttribution: '&copy; Grevinde Danner'
});

// begynd fetch() her
fetch(vikinger).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data);
  // tjek objektet i browserens udviklingsværktøj

  for (let marker in data.features) {
    console.log(data.features[marker].properties.url)

    // tekst til popup box
    let description = `
      <div class="beskr">
        <h5> ${ data.features[marker].properties.overskrift } </h5>
        <a href="${data.features[marker].properties.url}">Link</a>
      </div>
    `

    // Popups
    popUp = new mapboxgl.Popup({
        offset: 23
      })
      .setHTML(description) // HTML yeah!
      .addTo(map)

      // Markers
      aMarker = new mapboxgl.Marker({
          color: 'purple',
          size: 'large'
        })
        .setLngLat(data.features[marker].geometry.coordinates)
        .addTo(map)
        .setPopup(popUp)

    } // loop


}).catch(err => {
  // Error and description
  console.log('Error: ' + err)
})
