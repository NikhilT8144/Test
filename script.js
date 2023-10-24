//basic functions
var log = document.getElementById("log");
var home = document.getElementById("home");
var time = new Date();
var dt = document.getElementById("dt");
function setdt(){
  dt.innerHTML = time;
};
setTimeout(setdt(), 0);
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
