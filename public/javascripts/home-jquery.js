function renderLanding() {
  $('#landing-container').show();
  $('#bio-container').hide();
  $('#projects-container').hide();
  $('#contact-container').hide();
  pushDownNavBar();
}

function renderBio() {
  $('#landing-container').hide();
  $('#bio-container').show();
  $('#projects-container').hide();
  $('#contact-container').hide();
  pushUpNavBar();
}

function renderProjects() {
  $('#landing-container').hide();
  $('#bio-container').hide();
  $('#projects-container').show();
  // $('#projects-container').show().animate({"right": "=0"}, "slow");
  $('#contact-container').hide();
  pushUpNavBar();
}

function renderContact() {
  $('#landing-container').hide();
  $('#bio-container').hide();
  $('#projects-container').hide();
  $('#contact-container').show();
  pushUpNavBar();
}

function pushUpNavBar() {
  $('.navbar-bottom').css('margin-bottom', '20px');
}

function pushDownNavBar() {
  $('.navbar-bottom').css('margin-bottom', '0');
}

function runPage() {
  // On load stuff
  renderLanding();
  // On event stuff
  $('#bio').click(renderBio);
  $('#projects').click(renderProjects);
  $('#contact').click(renderContact);
  $('#nav-logo').click(renderLanding);
}

$(document).ready(runPage);
