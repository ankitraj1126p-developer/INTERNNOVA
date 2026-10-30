
let students = ["Ankit", "Rahul", "Aman", "Priya"];

console.log("Original Array:", students);



console.log("First Student:", students[0]);
console.log("Second Student:", students[1]);



students.push("Neha");

console.log("After Adding Student:", students);


students.pop();

console.log("After Removing Last Student:", students);


students.unshift("Ravi");

console.log("After Adding at Beginning:", students);


students.shift();

console.log("After Removing First Student:", students);



students[1] = "Aman Kumar";

console.log("After Updating:", students);



console.log("Number of Students:", students.length);



console.log("----- Student Names -----");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}



console.log("----- Using forEach -----");

students.forEach(function(student) {
    console.log(student);
});




let courses = ["HTML", "CSS", "JavaScript"];

console.log("Courses:", courses);

courses.push("React");
console.log("After push:", courses);

courses.pop();
console.log("After pop:", courses);


courses.unshift("Git");
console.log("After unshift:", courses);


courses.shift();
console.log("After shift:", courses);




let products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Headphones"
];

console.log("----- Products -----");

products.forEach(function(product) {
    console.log(product);
});