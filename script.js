var log = document.getElementbyId("log");
var home = document.getElementbyId("home");
log.style.display = "block";
home.style.display = "none";
function signin(){
  log.style.display = "none";
  home.style.display = "block";
}
