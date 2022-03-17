/**
 * fil: Rejser
 * hvad: Seminarer og rejser til CV
 **/
console.log('rejser.js = OK')

// Concerning Token and Style
// more@ https://docs.mapbox.com/mapbox-gl-js/guides/
const token = "pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g"
const mapStyle = "mapbox://styles/asathoor/cl0ruir7t00lo14qb095q88e6"
const rejser = "js/rejser.geojson"

// Concerning the Map
mapboxgl.accessToken = token
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: mapStyle, // style URL
  center: [-50, 56.32], // starting position [lng, lat]
  zoom: 2.3, // starting zoom
  pitch: 60,
  customAttribution: '&copy; Per Thykjær Jensen'
});

// fetch data and loop out features
fetch(rejser).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data); // what's in the JSON string?

  // markers
  for (let marker in data.features) {

    let description = `
      <div>
      <a href="${data.features[marker].properties.url}" target="_blank">
        ${data.features[marker].properties.hvad}
      </a> <br>
      ${data.features[marker].properties.name}
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
        color: 'purple',
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
