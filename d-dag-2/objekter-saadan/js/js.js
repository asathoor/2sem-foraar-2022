/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Javascript: OK.');

// objekt fra Duckett p. 106
var hotel = {
  name: 'Ceres',
  rooms: 42,
  booked: 17,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
}
