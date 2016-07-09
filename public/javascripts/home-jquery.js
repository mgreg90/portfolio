function pageContainerDown() {
  $('.page-container').animate({top: 1660}, 500, function () {
    $('.body-container').removeClass('visible').hide();
    $('.page-container').css({top: 0, left: 1660});
    $('#landing-container').addClass('visible').show();
  });
}

function renderLanding(innerContainersArray) {
  $('#landing-container').addClass('visible').show();
  $('.body-container').removeClass('visible').hide();
  for (var i = 0; i < innerContainersArray.length; i++) {
    innerContainersArray[i].hide();
  }
  pushDownNavBar();
}

function renderLandingAnimated() {
  pageContainerDown();
  pushDownNavBar();
}

function renderBio() {
  $('#landing-container').hide();
  $('.body-container').show();
  $('#bio-container').show();
  $('#projects-container').hide();
  $('#contact-container').hide();
  pushUpNavBar();
}

function renderBioAnimated() {
  $('.body-container').show();
  $('#bio-container').show();
  $('#projects-container').hide();
  $('#contact-container').hide();
  $('.page-container').animate({left: 160}, 500, function() {
    $('#landing-container').hide();
  })
  pushUpNavBar();
}

function renderProjects() {
  $('#landing-container').hide();
  $('.body-container').show();
  $('#bio-container').hide();
  $('#projects-container').show();
  $('#contact-container').hide();
  pushUpNavBar();
}

function renderProjectsAnimated() {
  $('.body-container').show();
  $('#projects-container').show();
  $('#bio-container').hide();
  $('#contact-container').hide();
  $('.page-container').animate({left: 160}, 500, function() {
    $('#landing-container').hide();
  })
  pushUpNavBar();
}

function renderContact() {
  $('#landing-container').hide();
  $('.body-container').show();
  $('#bio-container').hide();
  $('#projects-container').hide();
  $('#contact-container').show();
  pushUpNavBar();
}

function renderContactAnimated() {
  $('.body-container').show();
  $('#contact-container').show();
  $('#bio-container').hide();
  $('#projects-container').hide();
  $('.page-container').animate({left: 160}, 500, function() {
    $('#landing-container').hide();
  })
  pushUpNavBar();
}

function pushUpNavBar() {
  $('.navbar-bottom').css('margin-bottom', '20px');
}

function pushDownNavBar() {
  $('.navbar-bottom').css('margin-bottom', '0');
}

function runPage() {
  // Set variables
  var innerContainersArray = [
    $('#bio-container'), $('#projects-container'), $('#contact-container')
  ];
  // On load stuff
  renderLanding(innerContainersArray);
  // On event stuff
  $('#bio').click(renderBioAnimated);
  $('#projects').click(renderProjectsAnimated);
  $('#contact').click(renderContactAnimated);
  $('#nav-logo').click(renderLandingAnimated);
}

$(document).ready(runPage);
