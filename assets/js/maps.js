function initMap() {
   var options = {
      zoom:8.75, //sets zoom level to show all Northern Ireland
      center: { lat: 54.5973, lng: -5.9301} //sets centre of map on Belfast
   }
var map = new google.maps.Map(document.getElementById('map'), options); //creates map and passes in the options detailed

/*var marker = new google.maps.Marker({
   position:{lat: 54.59126940338371, lng: -5.925571636701271}, // Co-ordinates for JawBox Gins
   map:map, //Map that we need to add
   icon:'assets/images/placeholder (1).png', //Icons
   draggarble: false// If set to true you can drag the marker
});

var information = new google.maps.InfoWindow({
   content: '<h5>Jawbox Gins</h5>'
});

marker.addListener('click', function() {
   information.open(map, marker);
}); */
}