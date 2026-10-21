// Task 5: Loops




console.log("----- Numbers from 1 to 10 -----");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



console.log("----- Even Numbers from 1 to 20 -----");

let evenNumber = 2;

while (evenNumber <= 20) {
    console.log(evenNumber);
    evenNumber += 2;
}


console.log("----- Odd Numbers from 1 to 20 -----");

let oddNumber = 1;

do {
    console.log(oddNumber);
    oddNumber += 2;
} while (oddNumber <= 20);



console.log("----- Numbers Divisible by 3 -----");

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0) {
        console.log(i);
    }
}




console.log("----- Multiplication Table of 5 -----");

let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log(
        tableNumber + " x " + i + " = " + (tableNumber * i)
    );
}



console.log("----- Sum of Numbers from 1 to 10 -----");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum);




console.log("----- Numbers in Reverse Order -----");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}




console.log("----- Increment Example -----");

for (let i = 1; i <= 5; i++) {
    console.log("Value:", i);
}




console.log("----- Decrement Example -----");

for (let i = 5; i >= 1; i--) {
    console.log("Value:", i);
}