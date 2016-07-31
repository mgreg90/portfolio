function setUpPage() {
  console.log("setUpPage Start");
  $('.page-container').hide();
  $('div.panel.show-project').hide();

  // Show the active project panel
  $('div.panel.show-project').each(function() {
    if ($(this).data('active') === true) {
      $(this).show();
    }
  });

  // Style the active project panel button
  $('li.indiv-project-button').each(function() {
    if ($(this).data('active') === true) {
      $(this).css({
        backgroundColor: "#de2728",
        color: "#ffffff"
      });
    }
  });

  console.log("setUpPage End");
};

// *************** Nav Buttons

function navClickTogglePanel(arrayButtonContainerHashes) {
  console.log("navClickTogglePanel Start");
  // 1. For each button
  $.each(arrayButtonContainerHashes, function(indexNew, valueNew){
    // 1.1 on nav button click
    valueNew['button'].click(
      function() {
        // 1.1.1 Turn the button red
        $(this).animate(
          {
            backgroundColor: "#de2728",
            color: "#ffffff"
          }, 1000
        );
        $.each(arrayButtonContainerHashes, function(indexOld, valueOld) {
          if (valueOld['active'] === true && valueOld != valueNew) {
            // Make Title visible
            valueOld['container'].hide("slide", {easing: 'easeInOutQuad'}, 800, function(){});
            // 1.1.2 Make the active container's button black again
            valueOld['button'].animate(
              {
                backgroundColor: 'transparent',
                color: "#999"
              }, 1000
            );
            $('#title-container').show();
            // 1.1.3 slideOut the active container
          };
        });
        // 1.1.4 slideIn the container associated with the button
        if (valueNew['container'] !== false) {
          valueNew['container'].show("slide", {easing: 'easeInOutQuad'}, 800, function(){
            // 1.1.5 set that container to active in the array of hashes
            valueNew['active'] = true;
            // Make Title go away
            $('#title-container').hide();
          });
        }
      }
    );
  });

    console.log("navClickTogglePanel End");
};

// *************** Portfolio Buttons

function portfolioItemClickToggleItem() {
  $('.indiv-project-button').click(function() {
    // Change other buttons to default color
    $(this).each(function() {
      if ($(this).data('active') === true) {
        $(this).animate({
          backgroundColor: "",
          color: ""
        });
        $(this).data('active') = false;
      }
    });

    // Change the button color
    $(this).animate(
      {
        backgroundColor: "#de2728",
        color: "#ffffff"
      }, 1000
    );
    // Change other buttons to inactive

    // Change the clicked button to active
    $(this).data("active", "true");

    // Hide the other project

    // Show the project

  });
}

// *************** Run Page

function runPage() {
  console.log("runPage Start");
  setUpPage();
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
  navClickTogglePanel(arrayButtonContainerHashes);
  portfolioItemClickToggleItem();
  console.log("runPage End");
};

$(document).ready(runPage);
