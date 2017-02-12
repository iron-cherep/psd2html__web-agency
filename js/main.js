window.onload = function() {
              
  var toServices = document.getElementById("go-to-services");
  toServices.addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
  });
  
  var toProjects = document.getElementById("go-to-projects");
  toProjects.addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
  });
  
}
