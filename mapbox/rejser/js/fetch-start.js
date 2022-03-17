// begynt fetch() her
fetch("DIN-GEOJSON-FIL-HER.JS").then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data);
  // tjek objektet i browserens udviklingsværktøj


}).catch(err => {
  // Error and description
  console.log('Error: ' + err)
})
