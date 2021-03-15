//code taken from https://stackoverflow.com/questions/15531390/adding-array-of-markers-in-google-map and amended for purpose
function initMap () { 

   //creates new map, sets relevant options and places it in the 'map' div element
   let map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 8.65, // sets maps zoom
      center: new google.maps.LatLng(54.612297, -6.415621), 
      mapTypeId: google.maps.MapTypeId.ROADMAP 
   });

   //creates new information window
   let infowindow = new google.maps.InfoWindow; 
   let marker, i;

   //iterates through the locations variable to create markers and position them on the map
  //for (i = 0; i < locations.length; i++){  
   for (i=0; i<producerInfo.length;i++){  
      marker = new google.maps.Marker({ 
         //position: new google.maps.LatLng(locations[i][1],locations[i][2]),
         position: new google.maps.LatLng(producerInfo[i].lat,producerInfo[i].lng),
         map: map 
   });
   
   google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
            infowindow.setContent(producerInfo[i].title);
            infowindow.open(map, marker);
         }
   })
   (marker, i));}
};

