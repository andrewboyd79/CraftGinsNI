fetch('producers.json') //fetches the producers.json file
.then(function(response){
    return response.json(); //turns data into json format
})
.then(function(data){
    appendData(data); //callsback the appendData function
    })
;

function appendData (data) { //function to append the data from JSON file
        var mainContainer1=document.getElementsByClassName("datawrapper")[0]; //fetches the div with the ID demo1
        for (var i=0; i< data.Producers.length; i++) { //loops through every object in the JSON
            

                //declares the variables & creates each element
                var box = document.createElement("div");
                var location = document.createElement("div"); 
                var image = document.createElement("img"); 
                var headingText = document.createElement("h2");
                var categoryText = document.createElement("h6"); 
                var bodyText = document.createElement("div"); 
                var info = document.createElement("button"); 
                var modal = document.createElement("div");
                var modalDialog = document.createElement("div");
                var modalContent = document.createElement("div");
                var modalHeader = document.createElement("div");
                var modalTitle = document.createElement("h1");
                var modalBody = document.createElement("div");
                var modalRow = document.createElement("div");
                var modalContentTitle = document.createElement("h5");
                var modalContentText = document.createElement("p");
                var modalContentTitle1 = document.createElement("h5");
                var modalContentTitle2 = document.createElement("h5");
                var modalContentTitle3 = document.createElement("h5");
                var modalFooter = document.createElement("div");
                var webProducerButton = document.createElement("button");
                var modalCloseButton = document.createElement("button");
                var nearby = document.createElement("button");

            if (data.Producers[i].category === "Producer")  { //if statement checks if condition is met
                //assigns id/classes to the elements
                box.id=`${data.Producers[i].title}`;
                box.className= `${data.Producers[i].county} producerbox col-6`;
                location.className="countyheading";
                headingText.className = "producerheading";
                categoryText.className = "producerheading"; 
                bodyText.className = "producerbody"; 
                image.className = "producerimage"; 
                info.setAttribute ("type","button");
                info.className = "infobutton selectorbutton";                
                info.setAttribute ("data-bs-toggle","modal");
                info.setAttribute ("data-bs-target",`#Modal${data.Producers[i].id}`); 
                nearby.className="nearbybutton";
                modal.className="modal fade";
                modal.id=`Modal${data.Producers[i].id}`;
                modal.setAttribute ("tabindex","-1");
                modal.setAttribute ("aria-labelledby",`Modal${data.Producers[i].id}Label`); //start from here
                modal.setAttribute ("aria-hidden","true");
                modalDialog.className="modal-dialog modal-dialog-centered modal-xl";
                modalContent.className="modal-content";
                modalHeader.className="modal-header";
                modalTitle.className="modal-title";
                modalTitle.id=`Modal${data.Producers[i].id}Label`;
                modalBody.className="modal-body";
                modalRow.className="row";
                modalContentTitle.className="col-12 modal-content-title";
                modalContentText.className="col-12 modal-content-text";
                modalContentTitle1.className="col-4 modal-content-title";
                modalContentTitle2.className="col-4 modal-content-title";
                modalContentTitle3.className="col-4 modal-content-title";
                modalFooter.className="modal-footer";
                webProducerButton.className="btn btn-secondary producerweb";
                modalCloseButton.className="btn btn-secondary close";
                modalCloseButton.setAttribute ("data-bs-dismiss","modal");
                }

            else { //else if condition is not met
                //assigns id/classes to the elements
                box.id=`${data.Producers[i].title}`;
                box.className= `${data.Producers[i].county} barbox col-6`;
                location.className="countyheading";
                headingText.className = "barheading";
                categoryText.className = "barheading"; 
                bodyText.className = "barbody"; 
                image.className = "barimage";
                info.setAttribute ("type","button"); 
                info.className = "infobutton";
                info.setAttribute ("data-bs-toggle","modal");
                info.setAttribute ("data-bs-target",`#Modal${data.Producers[i].id}`);
                nearby.className="nearbybutton";
                modal.className="modal fade";
                modal.id=`Modal${data.Producers[i].id}`;
                modal.setAttribute ("tabindex","-1");  
                modal.setAttribute ("aria-labelledby",`Modal${data.Producers[i].id}Label`); //start from here
                modal.setAttribute ("aria-hidden","true");                
                modalDialog.className="modal-dialog modal-dialog-centered modal-xl";
                modalContent.className="modal-content";
                modalHeader.className="modal-header";
                modalTitle.className="modal-title";
                modalTitle.id=`Modal${data.Producers[i].id}Label`;
                modalBody.className="modal-body";
                modalRow.className="row";
                modalContentTitle.className="col-12 modal-content-title";
                modalContentText.className="col-12 modal-content-text";
                modalContentTitle1.className="col-4 modal-content-title";
                modalContentTitle2.className="col-4 modal-content-title";
                modalContentTitle3.className="col-4 modal-content-title";
                modalFooter.className="modal-footer";
                webProducerButton.className="btn btn-secondary producerweb";
                modalCloseButton.className="btn btn-secondary close";
                modalCloseButton.setAttribute ("data-bs-dismiss","modal");
                }

                //adds the informtion from the .json file to the relevant element
                location.innerHTML=`${data.Producers[i].county}`;
                image.src = `${data.Producers[i].image}`; 
                headingText.innerHTML = `${data.Producers[i].title}`;
                categoryText.innerHTML=`${data.Producers[i].category}`             
                bodyText.innerHTML = `${data.Producers[i].overview}`; 
                info.innerHTML = `More Information`;
                nearby.innerHTML = `Nearby`;
                modalTitle.innerHTML=`${data.Producers[i].title}`;
                modalContentTitle.innerHTML=`${data.Producers[i].address}`;
                modalContentText.innerHTML=`${data.Producers[i].detailed}`;
                modalContentTitle1.innerHTML=`${data.Producers[i].types}`;
                webProducerButton.innerHTML=`Producers Website`;
                modalCloseButton.innerHTML = `Close`;




                // appends the individual child divs to the parent and then the elements the box div
                mainContainer1.append(box); 
                box.append(location,image, headingText, bodyText, info, nearby, modal);
                headingText.append(categoryText);
                modal.append(modalDialog)
                modalDialog.append(modalContent);
                modalContent.append(modalHeader, modalBody, modalFooter);
                modalHeader.append(modalTitle);
                modalBody.append(modalRow);
                modalRow.append(modalContentTitle,modalContentText,modalContentTitle1,modalContentTitle2,modalContentTitle3);
                modalFooter.append(webProducerButton, modalCloseButton);
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
        //console.log("Antrim selected");
        //$(".Tyrone,.Fermanagh, .Armagh, .Derry").hide();
    };
});

/*$(".dropdown-item").click(function(){
    if($('.dropdown-item:contains("Tyrone")')){
        console.log("Tyrone selected");
        $(".Down, .Antrim, .Armagh, .Derry").hide(); // div with classes Down, Antrim, Armagh, Derry are hidden
    };
*/
 


