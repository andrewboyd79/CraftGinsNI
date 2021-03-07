$(document).ready(function() {
			
            $("#getdata").click(function(event){
               $.getJSON('producers.json', function(data) {
  $.each(data.results, function(key, value){
    console.log("key", key); 
    console.log("value", value.name)
   })
}) 
                    
                //$('#producerdatawrapper').append(`<div id="${data[i].title}" class="producerbox col-6"></div>`);
                //$('#"${data[i].title}"').append(`<img src='${data[i].image}' class="producerimage"><img>`);
                //$('#${data[i].title}').append(`<h2 class="producerheading">${data[i].title}</h2>`);
                //$('#${data[i].title}').append(`<div class="producerbody"></div>`);
                //$('#${data[i].title}').append(`<button class="infobutton"> More Information </button>`);
                //$('#${data[i].title}').append(`<button class="nearbybutton"> Nearby </button>`);
                   
                //});
            //});
        });
    




/*
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

$('#demo').html(`<div id="wrapperdiv"></div>`);
                   for (var i=0; i< data.length; i++);
                    
    $('#wrapperdiv').html(`<div id = "${data[i].title}" class="producerbox col-6"></div>`);
    $('.producerbox').html(`<img src='${data[i].image}' class="producerimage"><img>`);
    $('.producerbox').append(`<h2 class="producerheading"> ${data[i].title} </h2>`);
    $('.producerbox').append(`<div class="producerbody"> ${data[i].overview} </div>`);
    $('.producerbox').append(`<button class="infobutton"> More Information </button>`);
    $('.producerbox').append(`<button class="nearbybutton"> Nearby </button>`);}
               });
            });
	
$('#getdata').click(function(event){
    $('#demo').html(`<div id="wrapperdiv"> data.title  </div>`);
    $('#wrapperdiv').html(`<div class="producerbox col-6"></div>`);
    $('.producerbox').html(`<img src='assets/images/LogoCropped.png' class="producerimage"><img>`);
    $('.producerbox').append(`<h2 class="producerheading"> Test Heading </h2>`);
    $('.producerbox').append(`<div class="producerbody"> Test Div </div>`);
    $('.producerbox').append(`<button class="infobutton"> More Information </button>`);
    $('.producerbox').append(`<button class="nearbybutton"> Nearby </button>`);

    }
)
*/})