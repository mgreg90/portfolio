function renderBody() {
  $('#landing-container').hide();
  $('.body-container').show();
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
  // $('.body-container').animate({"left":"-1000px"}, "slow");
  $('.body-container').removeClass('visible').hide();
  $('#landing-container').addClass('visible').show();
  pushDownNavBar();
}

function renderBio() {
  renderBody()
  $('#bio-container').addClass('visible').show();
  $('#projects-container').removeClass('visible').hide();
  $('#contact-container').removeClass('visible').hide();
  pushUpNavBar();
}

function renderProjects() {
  renderBody();
  $('#bio-container').removeClass('visible').hide();
  $('#projects-container').addClass('visible').show();
  $('#contact-container').removeClass('visible').hide();
  pushUpNavBar();
}

function renderContact() {
  renderBody();
  $('#bio-container').removeClass('visible').hide();
  $('#projects-container').removeClass('visible').hide();
  $('#contact-container').addClass('visible').show();
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
  $('#bio').click(renderBio);
  $('#projects').click(renderProjects);
  $('#contact').click(renderContact);
  $('#nav-logo').click(renderLandingAnimated);
}

$(document).ready(runPage);
