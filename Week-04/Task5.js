

let nameInput = document.getElementById("nameInput");
let inputMessage = document.getElementById("inputMessage");

nameInput.addEventListener("input", function() {

    inputMessage.textContent =
        "You entered: " + nameInput.value;

});



let courseSelect = document.getElementById("courseSelect");
let courseMessage = document.getElementById("courseMessage");

courseSelect.addEventListener("change", function() {

    courseMessage.textContent =
        "Selected Course: " + courseSelect.value;

});




let studentForm = document.getElementById("studentForm");
let email = document.getElementById("email");
let output = document.getElementById("output");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    output.textContent =
        "Form submitted successfully! Email: " + email.value;

});



let clickButton = document.getElementById("clickButton");
let clickMessage = document.getElementById("clickMessage");

clickButton.addEventListener("click", function() {

    clickMessage.textContent =
        "Button was clicked successfully!";

});




let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function() {

    mouseBox.style.backgroundColor = "lightgreen";
    mouseBox.textContent = "Mouse is inside the box!";

});




mouseBox.addEventListener("mouseout", function() {

    mouseBox.style.backgroundColor = "lightblue";
    mouseBox.textContent = "Move your mouse over this box";

});




let keyboardInput = document.getElementById("keyboardInput");
let keyMessage = document.getElementById("keyMessage");

keyboardInput.addEventListener("keydown", function(event) {

    keyMessage.textContent =
        "You pressed: " + event.key;

});