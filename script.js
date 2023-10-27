//basic functions
let log = document.getElementById("log");
let home = document.getElementById("home");
let usrid = document.getElementById("usr").innerHTML;
log.style.display = "block";
home.style.display = "none";
if (log.style.display == "block") {
  window.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("signinbtn").click();
  }
  });
}
let dt = setInterval(setdt, 0);
function setdt() {
  let date = new Date();
  document.getElementById("dt").innerHTML = date;
}
function signin() {
  let date = new Date();
  log.style.display = "none";
  home.style.display = "block";
  console.log("Sign In Sucessful on " + date);
  document.getElementById("title").innerHTML = "Welcome" + usrid;
  cookies();
}
//cookies function
function cookies() {
//later
}
