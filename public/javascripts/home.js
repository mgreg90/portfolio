function showHome() {
  document.getElementById('bio-container').style.display = 'none';
  document.getElementById('projects-container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
};

function showBio() {
  document.getElementById('bio-container').style.display = 'block';
  document.getElementById('projects-container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
};

function showProjects() {
  document.getElementById('bio-container').style.display = 'none';
  document.getElementById('projects-container').style.display = 'block';
  document.getElementById('contact-container').style.display = 'none';
};

function showContact() {
  document.getElementById('bio-container').style.display = 'none';
  document.getElementById('projects-container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'block';
};
