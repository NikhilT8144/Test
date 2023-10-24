//basic functions
let log = document.getElementById("log");
let home = document.getElementById("home");
let time = Date();
let dt = document.getElementById("dt");

log.style.display = "block";
home.style.display = "none";
function signin(){
  log.style.display = "none";
  home.style.display = "block";
  console.log("Sign In Sucessful on " + time);
  setInterval(function setdt(){
  dt.innerHTML = text.replace(time, time);
  }, 0);
  cookies();
}
//cookies function
function cookies(){
//later
}
