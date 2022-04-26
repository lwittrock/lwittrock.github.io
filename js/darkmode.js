/* inspired by https://ryanfeigenbaum.com/dark-mode/ */

let darkmodetoggle = document.getElementById("DarkModeToggle");

/* on page load define lightMode and apply it to css */
document.addEventListener("DOMContentLoaded", function() {
    /* initialize variable in sessionStorage */
  if (sessionStorage.lightMode === undefined) {
      sessionStorage.lightMode = "dark";
  }
  else {
      /* on load set color mode to the one stored in sessionStorage */
      document.documentElement.setAttribute("color-mode", sessionStorage.lightMode);
  }
});


/* on button click change color mode in css and save in sessionStorage */
darkmodetoggle.addEventListener("click", function () {
    console.log("sessionStorage lightMode on click", sessionStorage.lightMode)
    if (sessionStorage.lightMode === "dark"){
        document.documentElement.setAttribute("color-mode", "light");
        sessionStorage.lightMode = "light";
    }
    else {
        document.documentElement.setAttribute("color-mode", "dark");
        sessionStorage.lightMode = "dark";
    }
});