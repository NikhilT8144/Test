//basic functions
let log = document.getElementById("log");
let home = document.getElementById("home");
let welcome = document.getElementById("title");
let usrid = document.getElementById("usr").innerHTML;
log.style.display = "block";
home.style.display = "none";
//enter key function for signin page
if (log.style.display == "block") {
  window.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("signinbtn").click();
  }
  });
}
//set date and time function
let dt = setInterval(setdt, 0);
function setdt() {
  let date = new Date();
  document.getElementById("dt").innerHTML = date;
}
//signin cookie
function signin() {
  let date = new Date();
  log.style.display = "none";
  home.style.display = "block";
  console.log("Sign In Sucessful on " + date);
  document.getElementById("title").innerHTML = "Welcome" + getCookie("username");
  setCookie("username", usrid);
}
//set cookie function
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//get cookie function
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//check cookie function
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    welcome.innerHTML = "Welcome "+usrid;
  } else {
    window.location.reload();
    if (user != "" && user != null) {
      setCookie("username", usrid, 365);
    }
  }
}