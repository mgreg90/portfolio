function setUpPage() {
  console.log("setUpPage Start");
  $('.page-container').hide();
  console.log("setUpPage End");
};

function navClickSlideIn() {};

function slideInProjects() {
  console.log("slideInProjects Start");
  $('#projects').click(function() {
    console.log("clicked");
    $('#projects-container').toggle("slide", "easeOutExpo");
  });
  console.log("slideInProjects End");
};

function runPage() {
  console.log("runPage Start");
  setUpPage();
  slideInProjects();
  console.log("runPage End");
};

$(document).ready(runPage);
