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
}

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
          }
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

function savePortfolioButtonColors() {
  $('.indiv-project-button').each(function() {
    $(this).data("bg-color", $(this).css("backgroundColor"));
    $(this).data("color", $(this).css("color"));
  });
}

function portfolioItemClickToggleItem() {
  $('.indiv-project-button').click(function() {
    // Change other buttons to default color
    $('.indiv-project-button').each(function() {
      $(this).animate({
        backgroundColor: $(this).data("bg-color"),
        color: $(this).data("color")
      });
    });
    // Change the button color
    $(this).animate({
      backgroundColor: "#de2728",
      color: "#ffffff"
    });
    // Hide project
    var projectPanelHash = $(this).data('panel');
    $('div#indiv-project-panel').hide('slide', function() {
      // Set variables
      console.log(projectPanelHash);
      // TODO left off here!
      // Change project data
      $('h2#indiv-project-panel-title').text(projectPanelHash.title);
      $('div.indiv-project-panel-half p').text(projectPanelHash.summary);
      $('div.indiv-project-panel-half img').attr('src', projectPanelHash.image);
      $('div.indiv-project-panel-half ul li a#github').attr('href', projectPanelHash.github);
      $('div.indiv-project-panel-half ul li a#site').attr('href', projectPanelHash.url);
    });
    // Show project
    var leftPos = $('div#projects-container').scrollLeft() - 200;
    console.log(leftPos)
    $('div#projects-container').animate({scrollLeft: leftPos - 200});
    $('div#indiv-project-panel').show('slide');
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
  savePortfolioButtonColors();
  portfolioItemClickToggleItem();
  console.log("runPage End");
};

$(document).ready(runPage);
