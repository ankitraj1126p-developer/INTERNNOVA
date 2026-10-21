




let number1 = 10;

if (number1 > 0) {
    console.log("Number is positive.");
}




let number2 = 15;

if (number2 % 2 === 0) {
    console.log(number2 + " is even.");
} else {
    console.log(number2 + " is odd.");
}




let number3 = -5;

if (number3 > 0) {
    console.log("Number is positive.");
} else if (number3 < 0) {
    console.log("Number is negative.");
} else {
    console.log("Number is zero.");
}



let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}




let a = 50;
let b = 30;

if (a > b) {
    console.log("Greater number is:", a);
} else if (b > a) {
    console.log("Greater number is:", b);
} else {
    console.log("Both numbers are equal.");
}




let x = 25;
let y = 40;
let z = 30;

if (x > y && x > z) {
    console.log("Greatest number is:", x);
} else if (y > x && y > z) {
    console.log("Greatest number is:", y);
} else if (z > x && z > y) {
    console.log("Greatest number is:", z);
} else {
    console.log("Some numbers are equal.");
}




let personAge = 21;
let hasID = true;

if (personAge >= 18) {

    if (hasID) {
        console.log("You can enter. Age and ID are valid.");
    } else {
        console.log("You need to show your ID.");
    }

} else {
    console.log("You are under 18.");
}



let marks = 75;

if (marks >= 50) {
    console.log("You have passed.");
} else {
    console.log("You have failed.");
}


let studentAge = 20;
let hasAdmission = true;

if (studentAge >= 18 && hasAdmission === true) {
    console.log("Student is eligible for the course.");
} else {
    console.log("Student is not eligible.");
}




let studentMarks = 85;

if (studentMarks >= 90) {
    console.log("Grade: A+");
} else if (studentMarks >= 80) {
    console.log("Grade: A");
} else if (studentMarks >= 70) {
    console.log("Grade: B");
} else if (studentMarks >= 60) {
    console.log("Grade: C");
} else if (studentMarks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F - Fail");
}