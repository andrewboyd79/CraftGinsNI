function initMap () { //code taken from https://stackoverflow.com/questions/15531390/adding-array-of-markers-in-google-map and amended for purpose
   
var locations = [ //sets the locations to be plotted on the map
   ['Jawbox Spirits Co Ltd', 54.59126940338371,-5.925571636701271, 1],
   ['Copeland Gin', 54.642529, -5.532204, 2],
   ['Boatyard Gin', 54.448132, -7.794293, 3],
   ['Symphonia Gin', 54.459824, -6.687854, 4],
   ['Echlinville Gin',54.468224, -5.510564,5],
   ['Belfast 1912 Gin',54.601686, -5.905813,6],
   ['Shortcross Gin',54.395077, -5.788797,7],
   ['Muriels Bar',54.599789, -5.925104,8],
   ['Galgorm Gin Bar',54.875546, -6.343377,9],
   ['Crown Liquor Saloon', 54.594692, -5.933982,10],
   ['Harbour Bar',55.207603, -6.658400,11]
];

var map = new google.maps.Map(document.getElementById('map'), { //creates new map and places it in the 'map' div element
   zoom: 8.65, // sets maps zoom
   center: new google.maps.LatLng(54.612297, -6.415621), //sets center of map
   mapTypeId: google.maps.MapTypeId.ROADMAP //sets style of map
});

var infowindow = new google.maps.InfoWindow; //creates new information window

var marker, i; 

for (i = 0; i < locations.length; i++) {  //iterates through theb locations starting at 0 until i is no longer less than the length
   console.log(locations[i][0]);       
     marker = new google.maps.Marker({ //creates new marker
       position: new google.maps.LatLng(locations[i][1], locations[i][2]), //defines marker position using 2nd and 3rd pieces of info from locations array
       map: map //defines which map the markers are to be displayed on
  })
  ;

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
           infowindow.setContent(locations[i][0]);
           infowindow.open(map, marker);
       }
  })(marker, i));}}

