fetch('producers.json') //fetches the producers.json file
.then(function(response){
    return response.json(); 
})
.then(function(data){
    //console.log(data);
    appendData(data);
})
;

//function to append the data from JSON file
function appendData (data) {
    console.log(data);
    var mainContainer1=document.getElementsByClassName("datawrapper")[0]; //fetches the div with the ID demo1
        for (var i=0; i< data.length; i++) { //loops through every object in the JSON
            

                //declares the variables & creates each element
                var box = document.createElement("div"); 
                var image = document.createElement("img"); 
                var headingtext = document.createElement("h2");
                var categorytext = document.createElement("h6"); 
                var bodytext = document.createElement("div"); 
                var info = document.createElement("button"); 
                var nearby = document.createElement("button");

            if (data[i].category === "Producer")  { //if statement checks if condition is met
                //assigns id/classes to the elements
                box.id=`${data[i].title}`;
                box.className= "producerbox col-6";
                headingtext.className = "producerheading";
                categorytext.className = "producerheading"; 
                bodytext.className = "producerbody"; 
                image.className = "producerimage"; 
                info.className = "infobutton";  
                nearby.className="nearbybutton";}
            else{
                box.id=`${data[i].title}`;
                box.className= "barbox col-6";
                headingtext.className = "barheading";
                categorytext.className = "barheading"; 
                bodytext.className = "barbody"; 
                image.className = "barimage"; 
                info.className = "infobutton";  
                nearby.className="nearbybutton";
            }

                //adds the informtion from the .json file to the relevant element
                image.src = `${data[i].image}`; 
                headingtext.innerHTML = `${data[i].title}`;
                categorytext.innerHTML=`${data[i].category}`             
                bodytext.innerHTML = `${data[i].overview}`; 
                info.innerHTML = `More Information`;
                nearby.innerHTML = `Nearby`;

                // appends the individual child divs to the parent and then the elements the box div
                mainContainer1.append(box); 
                box.append(image, headingtext, bodytext, info, nearby);
                headingtext.append(categorytext);
                }
        }


// selects the button with antdownbutton ID and runs the following function when button is clicked
$("#antdownbutton").click(function(){

    //the divs with the ID containing 'Jawbox & Ruth' are shown
    $("div[id*='Jawbox']").show();
    $("div[id*='Copeland']").show();

    //the remaining divs are hidden
    $("div[id*='Boatyard Gin']").hide();
    $("div[id*='Symphonia Gin']").hide();
    $("div[id*='Echlinville']").hide();
    $("div[id*='Belfast']").hide();
    $("div[id*='Shortcross']").hide();    
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
    $("div[id*='Echlinville']").hide();
    $("div[id*='Belfast']").hide();
    $("div[id*='Shortcross']").hide(); 
    }
)

// selects the button with armderbutton ID and runs the following function when button is clicked
$("#armderbutton").click(function(){

    //the divs with the ID containing 'Producer 5 & 6' are shown
    $("div[id*='Echlinville']").show();
    $("div[id*='Belfast']").show();
    $("div[id*='Shortcross']").show();

    //the remaining divs are hidden
    $("div[id*='Jawbox']").hide();
    $("div[id*='Copeland']").hide();
    $("div[id*='Boatyard Gin']").hide();
    $("div[id*='Symphonia Gin']").hide();
    }
)

// selects the button with showallbutton ID and runs the following function when button is clicked
$("#showallbutton").click(function(){
    if($("div:contains('box')")){ // if div contains word box then
        $(".barbox").show(); // elements with barbox class are shown
        $(".producerbox").show(); // elements with the producer boix class are shown
        }      
    }
)

// selects the button with producronlybutton ID and runs the following function when button is clicked
$("#produceronlybutton").click(function(){
    if($("h2:not('producerbox')")){ // if h2 isn't producerbox
        $(".barbox").hide(); // elements with the barbox class are hidden - therefore displaying producer only
    }
});

