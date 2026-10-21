

console.log("========== PROGRAM 1 ==========");

let number = 24;

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}




console.log("========== PROGRAM 2 ==========");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 10:", sum);




console.log("========== PROGRAM 3 ==========");

let a = 45;
let b = 78;
let c = 32;

if (a > b && a > c) {
    console.log("Largest number:", a);
} else if (b > a && b > c) {
    console.log("Largest number:", b);
} else {
    console.log("Largest number:", c);
}




console.log("========== PROGRAM 4 ==========");

let table = 7;

for (let i = 1; i <= 10; i++) {

    let result = table * i;

    console.log(
        table + " x " + i + " = " + result
    );
}




console.log("========== PROGRAM 5 ==========");

let marks = 82;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F - Fail");
}




console.log("========== PROGRAM 6 ==========");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log("Even Number:", i);
    }
}