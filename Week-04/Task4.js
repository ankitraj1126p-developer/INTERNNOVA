

let heading = document.getElementById("heading");
let message = document.getElementById("message");
let content = document.getElementById("content");

let changeTextButton = document.getElementById("changeText");
let changeStyleButton = document.getElementById("changeStyle");
let addElementButton = document.getElementById("addElement");
let removeElementButton = document.getElementById("removeElement");




changeTextButton.addEventListener("click", function() {

    message.textContent = "The text has been changed using JavaScript!";

});




content.innerHTML = "<strong>JavaScript can change HTML content dynamically.</strong>";



changeStyleButton.addEventListener("click", function() {

    heading.style.color = "blue";
    heading.style.fontSize = "35px";

    message.style.color = "green";
    message.style.fontWeight = "bold";

    content.style.backgroundColor = "lightyellow";
    content.style.border = "2px solid orange";

});



addElementButton.addEventListener("click", function() {

    let newElement = document.createElement("p");

    newElement.textContent = "This is a new paragraph added using JavaScript.";

    newElement.style.color = "purple";

    document.querySelector(".container").appendChild(newElement);

});




removeElementButton.addEventListener("click", function() {

    let lastElement = document.querySelector(".container p:last-of-type");

    if (lastElement) {
        lastElement.remove();
    }

});