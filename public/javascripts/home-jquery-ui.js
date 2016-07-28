function setUpPage() {
  console.log("setUpPage Start");
  $('.page-container').hide();
  console.log("setUpPage End");
};

function navClickSlideIn(arrayButtonContainerHashes) {
  console.log("navClickSlideIn Start");
  // 1. For each button
  $.each(arrayButtonContainerHashes, function(indexNew, valueNew){
    // 1.1 on nav button click
    valueNew['button'].click(
      function() {
        // 1.1.1 slideOut the active container
        $.each(arrayButtonContainerHashes, function(indexOld, valueOld) {
          console.log(valueOld['active']);
          if (valueOld['active'] === true && valueOld != valueNew) {
            valueOld['container'].hide("slide", {easing: 'easeInOutQuad'}, 800, function(){});
          };
        });
        // 1.1.2 slideIn the container associated with the button
        if (valueNew['container'] !== false) {
          valueNew['container'].show("slide", {easing: 'easeInOutQuad'}, 800, function(){
            // 1.1.3 set that container to active in the array of hashes
            valueNew['active'] = true;
          });
        }
      }
    );
  });

    console.log("navClickSlideIn End");
};

function slideInProjects() {
  console.log("slideInProjects Start");
  $('#projects').click(function() {
    console.log("clicked");
    $('#projects-container').toggle("slide", {easing: 'easeInOutQuad'}, 800, function(){});
  });
  console.log("slideInProjects End");
};

function runPage() {
  console.log("runPage Start");
  var arrayButtonContainerHashes = [
    {
      button: $('#nav-logo'),
      container: false,
      active: false
    },
    {
      button: $('li#bio'),
      container: $('#bio-container'),
      active: false
    },
    {
      button: $('li#projects'),
      container: $('#projects-container'),
      active: false
    },
    {
      button: $('li#contact'),
      container: $('#contact-container'),
      active: false
    }
  ];
  console.log(arrayButtonContainerHashes)
  setUpPage();
  navClickSlideIn(arrayButtonContainerHashes);
  // slideInProjects();
  console.log("runPage End");
};

$(document).ready(runPage);
