fetch('producers.json') //fetches the producers.json file
.then(function(response){
    return response.json(); 
})
.then(function(data){
    appendData(data);
    })
;

//function to append the data from JSON file
function appendData (data) {
        //console.log(data.Producers);
        var mainContainer1=document.getElementsByClassName("datawrapper")[0]; //fetches the div with the ID demo1
        for (var i=0; i< data.Producers.length; i++) { //loops through every object in the JSON
            

                //declares the variables & creates each element
                var box = document.createElement("div");
                var location = document.createElement("div"); 
                var image = document.createElement("img"); 
                var headingtext = document.createElement("h2");
                var categorytext = document.createElement("h6"); 
                var bodytext = document.createElement("div"); 
                var info = document.createElement("button"); 
                var nearby = document.createElement("button");

            if (data.Producers[i].category === "Producer")  { //if statement checks if condition is met
                //assigns id/classes to the elements
                box.id=`${data.Producers[i].title}`;
                box.className= `${data.Producers[i].county} producerbox col-6`;
                location.className="countyheading";
                headingtext.className = "producerheading";
                categorytext.className = "producerheading"; 
                bodytext.className = "producerbody"; 
                image.className = "producerimage"; 
                info.className = "infobutton";  
                nearby.className="nearbybutton";
                }

            else { //else if condition is not met
                //assigns id/classes to the elements
                box.id=`${data.Producers[i].title}`;
                box.className= `${data.Producers[i].county} barbox col-6`;
                location.className="countyheading";
                headingtext.className = "barheading";
                categorytext.className = "barheading"; 
                bodytext.className = "barbody"; 
                image.className = "barimage"; 
                info.className = "infobutton";  
                nearby.className="nearbybutton";
                }

                //adds the informtion from the .json file to the relevant element
                location.innerHTML=`${data.Producers[i].county}`;
                image.src = `${data.Producers[i].image}`; 
                headingtext.innerHTML = `${data.Producers[i].title}`;
                categorytext.innerHTML=`${data.Producers[i].category}`             
                bodytext.innerHTML = `${data.Producers[i].overview}`; 
                info.innerHTML = `More Information`;
                nearby.innerHTML = `Nearby`;

                // appends the individual child divs to the parent and then the elements the box div
                mainContainer1.append(box); 
                box.append(location,image, headingtext, bodytext, info, nearby);
                headingtext.append(categorytext);
                }
        }

$("#antdownbutton").click(function(){ // selects the button with antdownbutton ID and runs the following function when button is clicked
    if($(".Antrim, .Down")){ // if class is Antrim or Down
        $(".Tyrone,.Fermanagh, .Armagh, .Derry").hide(); // div with classes Tyrone, Fermanagh, Armagh, Derry are hidden
    }  
})

$("#tyrfermbutton").click(function(){ // selects the button with tyrfermbutton ID and runs the following function when button is clicked
    if($(".Tyrone, .Fermanagh")){ // if class is Tyrone or Fermanagh
        $(".Down, .Antrim, .Armagh, .Derry").hide(); // div with classes Down, Antrim, Armagh, Derry are hidden
    }  
})

$("#armderbutton").click(function(){ // selects the button with armderbutton ID and runs the following function when button is clicked
    if($(".Armagh, .Derry")){ // if class is Armagh or Derry
        $(".Antrim,.Down, .Tyrone, .Fermanagh").hide(); // div with classes Antrim, Down, Tyrone, Fermanagh are hidden
    }  
})

$("#showallbutton").click(function(){ // selects the button with showallbutton ID and runs the following function when button is clicked
    if($("div:contains('box')")){ // if div contains word box then
        $(".barbox, .producerbox").show(); // elements with producerbox and barbox class are shown
    }      
})

$("#produceronlybutton").click(function(){ // selects the button with producronlybutton ID and runs the following function when button is clicked
    if($("h2:not('producerbox')")){ // if h2 isn't producerbox
        $(".barbox").hide(); // elements with the barbox class are hidden - therefore displaying producer only
    }
})

$("#ginjointsonlybutton").click(function(){ // selects the button with producronlybutton ID and runs the following function when button is clicked
    if($("h2:not('barbox')")){ // if h2 isn't producerbox
        $(".producerbox").hide(); // elements with the barbox class are hidden - therefore displaying producer only
    }
})

$(".dropdown-item").click(function(){
    if($('a').eq(0)){
        console.log("Antrim selected");
        //$(".Tyrone,.Fermanagh, .Armagh, .Derry").hide();
    };
});

/*$(".dropdown-item").click(function(){
    if($('.dropdown-item:contains("Tyrone")')){
        console.log("Tyrone selected");
        $(".Down, .Antrim, .Armagh, .Derry").hide(); // div with classes Down, Antrim, Armagh, Derry are hidden
    };
*/
 


