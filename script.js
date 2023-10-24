//basic functions
let log = document.getElementById("log");
let home = document.getElementById("home");
let dt = document.getElementById("dt");
const time = new Date();
log.style.display = "block";
home.style.display = "none";
if(log.style.display = "block";){
  window.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("signinbtn").click();
  }
  });
};
function signin(){
  log.style.display = "none";
  home.style.display = "block";
  console.log("Sign In Sucessful on " + time);
  setInterval(function setdt(){
  dt.innerHTML = time.toLocaleTimeString();
  }, 0);
  cookies();
}
//cookies function
function cookies(){
//later
}
