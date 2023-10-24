//basic functions
var log = document.getElementbyId("log");
var home = document.getElementbyId("home");
var time = Date();
var datetime = document.getElementbyId("datetime");
dt.innerHTML = time;
log.style.display = "block";
home.style.display = "none";
function signin(){
  log.style.display = "none";
  home.style.display = "block";
  console.log("Sign In Sucessful on " + time);
  var inlog = "Successful on " + time;
  cookies();
}
//cookies function
function cookies(){
//later
}
