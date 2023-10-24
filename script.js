//basic functions
let log = document.getElementById("log");
let home = document.getElementById("home");
let time = new Date();
let dt = document.getElementById("dt");
setInterval(function setdt(){
  dt.innerHTML = time;
}, 0);
log.style.display = "block";
home.style.display = "none";
function signin(){
  log.style.display = "none";
  home.style.display = "block";
  console.log("Sign In Sucessful on " + time);
  let inlog = "Successful on " + time;
  cookies();
}
//cookies function
function cookies(){
//later
}
