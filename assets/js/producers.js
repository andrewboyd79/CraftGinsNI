var mainContainer1 = document.getElementsByClassName("datawrapper")[
    0]; //fetches the div with datawrapper class
  for (let producerInfoContent of producerInfo) { //loops through every object in the producersInfo.js
    var box = document.createElement("div");
    box.id = `${producerInfoContent.title}`;
    box.className =
      `${producerInfoContent.county} ${producerInfoContent.description}box col-12 col-md-6`;
  
    box.innerHTML = `
          
              <div class="countyheading">${producerInfoContent.category} <br> ${producerInfoContent.county}
              
              </div>
  
              <img class="${producerInfoContent.description}image" src=${producerInfoContent.image}>
              
              <h2 class="${producerInfoContent.description}heading">${producerInfoContent.title}</h2>
                  
              <div class="${producerInfoContent.description}body">${producerInfoContent.overview}</div>
  
              <button type="button" class="infobutton" data-bs-toggle="modal" data-bs-target="#Modal${producerInfoContent.id}">More Information</button>
              
  
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
                                  <ul class="col-12 col-md-4 modal-content-info">What's on offer?
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
  }
  
  
  $("#showallbutton").click(
    function() { // selects the button with showallbutton ID and runs the following function when button is clicked
      $(".barbox, .producerbox")
        .show(); // elements with producerbox and barbox class are shown
      let locations = producerInfo.filter(type => type.id >= 0);
      initMap(locations);
    });
  
  
  $("#antrimdropdown").click(function() {
    $(".barbox, .producerbox").show();
    $(".Down, .Tyrone, .Fermanagh, .Armagh, .Derry").hide();
    let locations = producerInfo.filter(area => area.county === ((
      "Antrim")));
    initMap(locations);
  });
  
  $("#downdropdown").click(function() {
    $(".barbox, .producerbox").show();
    $(".Antrim, .Tyrone, .Fermanagh, .Armagh, .Derry").hide();
    let locations = producerInfo.filter(area => area.county === ((
      "Down")));
    initMap(locations);
  });
  
  $("#tyronedropdown").click(function() {
    $(".barbox, .producerbox").show();
    $(".Down, .Antrim, .Fermanagh, .Armagh, .Derry").hide();
    let locations = producerInfo.filter(area => area.county === (
      "Tyrone"));
    initMap(locations);
  });
  
  $("#fermanaghdropdown").click(function() {
    $(".barbox, .producerbox").show();
    $(".Down, .Antrim, .Tyrone, .Armagh, .Derry").hide();
    let locations = producerInfo.filter(area => area.county === (
      "Fermanagh"));
    initMap(locations);
  });
  
  
  $("#derrydropdown").click(function() {
    $(".barbox, .producerbox").show();
    $(".Antrim,.Down, .Tyrone, .Fermanagh").hide();
    let locations = producerInfo.filter(area => area.county === (
      "Derry"));
    initMap(locations);
  });
  
  
  $("#ginproduceronlybutton").click(function() {
    $(".barbox, .producerbox").show();
    $(".barbox").hide();
    let locations = producerInfo.filter(type => type.category === (
      "Gin Producer"));
    initMap(locations);
  });
  
  $("#ginjointsonlybutton").click(function() {
    $(".barbox, .producerbox").show();
    $(".producerbox").hide();
    let locations = producerInfo.filter(type => type.category === (
      "Gin Joint"));
    initMap(locations);
  });