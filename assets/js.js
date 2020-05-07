window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
document.getElementById("navbar").style.height = "3em";
document.getElementById("title").style.fontSize = "1.2em";

var elements = document.getElementsByClassName('subtext');
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = ".9em";
  element.style.backgroundColor = "#FFF";
}
}

else {
document.getElementById("navbar").style.height = "5em";
document.getElementById("title").style.fontSize = "2em";

var elements = document.getElementsByClassName('subtext');
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = "1.5em";
}
}
}

function ResumeOpen() {
  window.open("http://wcet3.waketech.edu/gguzman/WEB287/midterm/assets/gguzman_resume.pdf", "_blank");
}

function BlogOpen() {
  window.open("https://newdesignportfolio.design.blog/", "_blank");
}
