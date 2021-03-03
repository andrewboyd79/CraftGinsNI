$(document).ready(function() {
			
            $("#getdata").click(function(event){
               $.getJSON('producers.json', function(data) {
                  for (var i=0; i< data.length; i++) { 
                $('#demo').html(`<div id="${data[i].title}" class="producerbox col-6"></div>`);
                          
                //$('.producerbox').append(`<img src='assets/images/LogoCropped.png' class="producerimage"><img>`);
                $('.producerbox').append(`<h2 class="producerheading"> ${data[i].title} </h2>`);
                //$('.producerbox').append(`<div class="producerbody"> Test </div>`);
                //$('.producerbox').append(`<button class="infobutton"> More Information </button>`);
                //$('.producerbox').append(`<button class="nearbybutton"> Nearby </button>`);
                }
                });
            });
				
         });