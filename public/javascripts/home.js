function showHome() {
  document.getElementById('bio-container').style.display = 'none';
  document.getElementById('projects-container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
  document.getElementById('landing-container').style.display = 'block';
  document.getElementsByClassName('navbar-bottom')[0].style.marginBottom = '0'
};

function showBio() {
  document.getElementById('bio-container').style.display = 'flex';
  document.getElementById('projects-container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
  document.getElementById('landing-container').style.display = 'none';
  document.getElementsByClassName('navbar-bottom')[0].style.marginBottom = '15px'
};

function showProjects() {
  document.getElementById('bio-container').style.display = 'none';
  document.getElementById('projects-container').style.display = 'flex';
  document.getElementById('contact-container').style.display = 'none';
  document.getElementById('landing-container').style.display = 'none';
  document.getElementsByClassName('navbar-bottom')[0].style.marginBottom = '15px'
};

function showContact() {
  document.getElementById('bio-container').style.display = 'none';
  document.getElementById('projects-container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'flex';
  document.getElementById('landing-container').style.display = 'none';
  document.getElementsByClassName('navbar-bottom')[0].style.marginBottom = '15px'
};
