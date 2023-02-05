function select(link) {
  let options = document.querySelectorAll("#links a");
  options[0].className = "";
  options[1].className = "";
  options[2].className = "";
  options[3].className = "";
  options[4].className = "";
  link.className = "selected";
  
  let x = document.getElementById("nav");
  x.className = "";
}

function responsiveMenu() { 
  let x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

window.onscroll = function() {
  skillsEfect()
};

function skillsEfect() {
  let skills = document.getElementById("skills");
  let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
  
  if(skillsDistance >= 300) {
    document.getElementById("java").classList.add("bar-progress1");
    document.getElementById("ms").classList.add("bar-progress2");
    document.getElementById("db").classList.add("bar-progress3");
    document.getElementById("html").classList.add("bar-progress4");
    document.getElementById("js").classList.add("bar-progress5");
    document.getElementById("py").classList.add("bar-progress6");
  }
}