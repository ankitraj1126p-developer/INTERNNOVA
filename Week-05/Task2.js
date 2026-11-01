console.log("Task 2: HTML and CSS Structure Loaded");

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Product Management System");
    });
});