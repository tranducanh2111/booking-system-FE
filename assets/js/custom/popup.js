// Get the modal
var overlay = document.getElementById("overlay");

// Get the button that opens the modal
var btn = document.querySelector(".bg-primary");

// Get the cancel button inside the popup
var cancelBtn = document.querySelector(".popup button.text-white.bg-red");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    overlay.style.display = "block";
}

// When the user clicks the cancel button, close the popup
cancelBtn.onclick = function() {
    overlay.style.display = "none";
}