
    var mainContainer1=document.getElementsByClassName("datawrapper")[0]; //fetches the div with the ID demo1
    for (var i=0; i< producerInfo.length; i++) { //loops through every object in the JSON
        let producerInfoContent = producerInfo[i];
        var box = document.createElement("div");
        box.id=`${producerInfoContent.title}`;
        box.className= `${producerInfoContent.county} ${producerInfoContent.description}box col-6`;
        
        box.innerHTML=`
        
            <div class="countyheading">${producerInfoContent.category} <br> ${producerInfoContent.county}
            
            </div>

            <img class="${producerInfoContent.description}image" src=${producerInfoContent.image}>
            
            <h2 class="${producerInfoContent.description}heading">${producerInfoContent.title}</h2>
                
            <div class="${producerInfoContent.description}body">${producerInfoContent.overview}</div>

            <button type="button" class="infobutton" data-bs-toggle="modal" data-bs-target="#Modal${producerInfoContent.id}">More Information</button>
            <button class="nearbybutton">Nearby</button>

            <div class="modal fade" id="Modal${producerInfoContent.id}" tabindex="-1" arialabelledby="Modal${producerInfoContent.id}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="Modal${producerInfoContent.id}Label">${producerInfoContent.title}</h1>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <h5 class="col-12 modal-content-title">${producerInfoContent.address}</h5>
                                <p class="col-12 modal-content-text">${producerInfoContent.detailed}</p>
                                <ul class="col-4 modal-content-info">What's on offer?
                                    <li>${producerInfoContent.type1}</li>
                                    <li>${producerInfoContent.type2}</li>
                                    <li>${producerInfoContent.type3}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a href="${producerInfoContent.website}" target="_blank">
                            <button class="btn btn-secondary producerweb">Producers Website</button>
                            </a> 
                            
                            <button class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        mainContainer1.append(box);
    };

$("#antdownbutton").click(function(){ // selects the button with tyrfermbutton ID and runs the following function when button is clicked
    if($(".Antrim, .Down")){ // if class is Tyrone or Fermanagh
        $(".Tyrone, .Fermanagh, .Armagh, .Derry").hide(); // div with classes Down, Antrim, Armagh, Derry are hidden
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

/*
$(".dropdown-item").click(function(){
    if($('a').eq(0)){
        //console.log("Antrim selected");
        //$(".Tyrone,.Fermanagh, .Armagh, .Derry").hide();
    };
});
*/



/*
$(".dropdown-item").click(function(){
    if($('.dropdown-item:contains("Tyrone")')){
        console.log("Tyrone selected");
        $(".Down, .Antrim, .Armagh, .Derry").hide(); // div with classes Down, Antrim, Armagh, Derry are hidden
    };
*/