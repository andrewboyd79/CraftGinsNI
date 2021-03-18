//code taken from https://www.emailjs.com/docs/ amended accordingly
function sendMail(contactForm) {
    emailjs.send("service_mcfsn9l",
      "template_ilc3tsk", { //passes in the service name, template ID and template paramters
        "from_name": document.getElementById('fromName')
        .value, //specifies template parameters
        "from_email": document.getElementById('fromEmail').value,
        "message": document.getElementById('msg').value
      })
      .then(
        function(response) {
          alert(
          "Thank you for contacting us!"); //displays alert message when successful
        },
        function(error) {
          alert(
            "Unfortunately there has been an error with your submission. Please try again later!"
            ); //displays an alert message when unsuccessful
        }
      );
    return false; // To block from loading a new page
  }