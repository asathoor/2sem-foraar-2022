/**
 * fil: Rejser
 * hvad: Seminarer og rejser til CV
 **/
console.log('rejser.js = OK')

// Concerning Token and Style
// more@ https://docs.mapbox.com/mapbox-gl-js/guides/
const token = "mapbox://styles/asathoor/cjn7v18hb1px52rppr91osmgm"
const mapStyle = "mapbox://styles/asathoor/cjn7v18hb1px52rppr91osmgm"
const rejser = "js/rejser.geojson"


// Concerning the Map
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-50, 56.32], // starting position [lng, lat]
  zoom: 2.3 // starting zoom
});

// fetch data
fetch(rejser).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data); // what's in the JSON string?

  // markers
  for (marker in data.features) {

    let description = `
      <div>
      <a href="${data.features[marker].properties.url}" target="_blank">
        ${data.features[marker].properties.hvad}
      </a> <br>
      ${data.features[marker].properties.name} <br>
      (${data.features[marker].properties.hvornaar})<br>
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
        color: 'orange',
        size: 'large'
      })
      .setLngLat(data.features[marker].geometry.coordinates)
      .addTo(map)
      .setPopup(popUp)
  }


  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

}).catch(err => {
  // Error and description
  console.log('Error: ' + err)
})
