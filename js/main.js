window.onload = function() {
          
  addSmoothScrollButtons();              
  addNavbarButton();
  
}


function addSmoothScrollButtons() {
  var toServices = document.getElementById("go-to-services");
  toServices.addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
  });
  
  var toProjects = document.getElementById("go-to-projects");
  toProjects.addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
  });
}

function addNavbarButton() {
  
  var navbar = document.getElementById("navbar");
  var navbarButton = document.getElementById("navbar-button");
  var navbarIcon = document.getElementById("navbar-icon");
  closeNavbar();
  
  navbarButton.addEventListener("click", function() {
    if (navbarOpened) { closeNavbar(); }
    else { openNavbar(); }          
  }); 
  
  function closeNavbar() {
    navbar.classList.add("navigation__menu--collapsed");
    navbarIcon.classList.remove("navigation__button-bar--collapsed");
    
    navbarOpened = false;
  }
  function openNavbar() {
    navbar.classList.remove("navigation__menu--collapsed");
    navbarIcon.classList.add("navigation__button-bar--collapsed");
    navbarOpened = true;
  }    
}