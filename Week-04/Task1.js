
function greetStudent() {
    console.log("Hello, Ankit! Welcome to JavaScript.");
}

greetStudent();



function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("Ankit");


function addNumbers(a, b) {
    console.log("Sum:", a + b);
}

addNumbers(20, 30);



function calculateMarks(marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    return total;
}

let totalMarks = calculateMarks(80, 85, 90);

console.log("Total Marks:", totalMarks);



function calculatePercentage(total, maximum) {
    return (total / maximum) * 100;
}

function displayResult(percentage) {
    if (percentage >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let percentage = calculatePercentage(totalMarks, 300);

console.log("Percentage:", percentage + "%");
console.log("Result:", displayResult(percentage));



function calculatePrice(price, quantity) {
    return price * quantity;
}

let totalPrice = calculatePrice(500, 3);

console.log("Total Price:", totalPrice);



const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(10, 5));



const square = number => number * number;

console.log("Square:", square(6));