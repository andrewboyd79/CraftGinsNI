$(document).ready(function() {			
    $("#getdata").click(function(event){
        $.getJSON('producers.json', function(data) {
                   
         }
        );



/*$('#demo').html(`<div id="wrapperdiv"></div>`);
                   for (var i=0; i< data.length; i++);
                    
    $('#wrapperdiv').html(`<div id = "${data[i].title}" class="producerbox col-6"></div>`);
    $('.producerbox').html(`<img src='${data[i].image}' class="producerimage"><img>`);
    $('.producerbox').append(`<h2 class="producerheading"> ${data[i].title} </h2>`);
    $('.producerbox').append(`<div class="producerbody"> ${data[i].overview} </div>`);
    $('.producerbox').append(`<button class="infobutton"> More Information </button>`);
    $('.producerbox').append(`<button class="nearbybutton"> Nearby </button>`);}
               });
            });
		*/		



/*$(document).ready(function(){
    $('#getdata').click(function(event){
       $.getJSON('producers.json', function(data) {
           $('#test').html(`<div id="wrapperdiv"> data.title  </div>`); 
      }
})*/

/*$('#getdata').click(function(event){
    $('#demo').html(`<div id="wrapperdiv"> data.title  </div>`);
    $('#wrapperdiv').html(`<div class="producerbox col-6"></div>`);
    $('.producerbox').html(`<img src='assets/images/LogoCropped.png' class="producerimage"><img>`);
    $('.producerbox').append(`<h2 class="producerheading"> Test Heading </h2>`);
    $('.producerbox').append(`<div class="producerbody"> Test Div </div>`);
    $('.producerbox').append(`<button class="infobutton"> More Information </button>`);
    $('.producerbox').append(`<button class="nearbybutton"> Nearby </button>`);

    }
)*/

/*fetch('producers.json') //fetches the producers.json file
.then(function(response){
    return response.json(); 
})
.then(function(data){
    appendData(data);
})
;

//function to append the data from JSON file
function appendData (data) {
    var mainContainer1=document.getElementsByClassName("demo")[0]; //fetches the div with the ID demo1
        for (var i=0; i< data.length; i++) { //loops through every object in the JSON
            if (data[i].title !== "X") { //if statement checks if condition is met

                //declares the variables & creates each element
                var box = document.createElement("div"); 
                var image = document.createElement("img"); 
                var headingtext = document.createElement("h2"); 
                var bodytext = document.createElement("div"); 
                var info = document.createElement("button"); 
                var nearby = document.createElement("button"); 

                //assigns id/classes to the elements
                box.id=`${data[i].title}`;
                box.className= "producerbox col-6";
                headingtext.className = "producerheading"; 
                bodytext.className = "producerbody"; 
                image.className = "producerimage"; 
                info.className = "infobutton";  
                nearby.className="nearbybutton";

                //adds the informtion from the .json file to the relevant element
                image.src = `${data[i].image}`; 
                headingtext.innerHTML = `${data[i].title}`;             
                bodytext.innerHTML = `${data[i].overview}`; 
                info.innerHTML = `More Information`;
                nearby.innerHTML = `Nearby`;

                // appends the individual child divs to the parent and then the elements the box div
                mainContainer1.append(box); 
                box.append(image, headingtext, bodytext, info, nearby);
                }
        }
}*/


// selects the button with antdownbutton ID and runs the following function when button is clicked
$("#antdownbutton").click(function(){

    //the divs with the ID containing 'Jawbox & Ruth' are shown
    $("div[id*='Jawbox']").show();
    $("div[id*='Copeland']").show();

    //the remaining divs are hidden
    $("div[id*='Boatyard Gin']").hide();
    $("div[id*='Symphonia Gin']").hide();
    $("div[id*='Producer 5']").hide();
    $("div[id*='Producer 6']").hide();    
    }
)

// selects the button with tyrfermbutton ID and runs the following function when button is clicked
$("#tyrfermbutton").click(function(){

    //the divs with the ID containing 'Boatyard Gin & 4' are shown
    $("div[id*='Boatyard Gin']").show();
    $("div[id*='Symphonia Gin']").show();
    
    //the remaining divs are hidden
    $("div[id*='Jawbox']").hide();
    $("div[id*='Copeland']").hide();
    $("div[id*='Producer 5']").hide();
    $("div[id*='Producer 6']").hide();
    }
)

// selects the button with armderbutton ID and runs the following function when button is clicked
$("#armderbutton").click(function(){

    //the divs with the ID containing 'Producer 5 & 6' are shown
    $("div[id*='Producer 5']").show();
    $("div[id*='Producer 6']").show();

    //the remaining divs are hidden
    $("div[id*='Jawbox']").hide();
    $("div[id*='Copeland']").hide();
    $("div[id*='Boatyard Gin']").hide();
    $("div[id*='Symphonia Gin']").hide();
    }
)

// selects the button with showallbutton ID and runs the following function when button is clicked
$("#showallbutton").click(function(){

    //all divs are shown
    $("div[id*='Producer 5']").show();
    $("div[id*='Producer 6']").show();
    $("div[id*='Jawbox']").show();
    $("div[id*='Copeland']").show();
    $("div[id*='Boatyard Gin']").show();
    $("div[id*='Symphonia Gin']").show();    
    }
)
