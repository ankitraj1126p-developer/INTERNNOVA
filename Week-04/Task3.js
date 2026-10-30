

let student1 = {
    name: "Ankit Raj",
    age: 21,
    course: "B.Tech CSE",
    marks: 85
};

let student2 = {
    name: "Rahul Kumar",
    age: 22,
    course: "B.Tech CSE",
    marks: 78
};

let student3 = {
    name: "Aman Singh",
    age: 20,
    course: "B.Tech IT",
    marks: 92
};


console.log("----- Student 1 -----");
console.log(student1);

console.log("----- Student 2 -----");
console.log(student2);

console.log("----- Student 3 -----");
console.log(student3);


console.log("Student 1 Name:", student1.name);
console.log("Student 1 Age:", student1.age);
console.log("Student 1 Course:", student1.course);
console.log("Student 1 Marks:", student1.marks);




console.log("Student 2 Name:", student2["name"]);
console.log("Student 2 Course:", student2["course"]);

student1.marks = 90;

console.log("Updated Student 1 Marks:", student1.marks);

student1.city = "Dehradun";
student1.email = "ankit@example.com";

console.log("Student 1 after adding properties:");
console.log(student1);

delete student1.email;

console.log("Student 1 after removing email:");
console.log(student1);

function checkResult(student) {

    if (student.marks >= 40) {
        console.log(student.name + " has passed.");
    } else {
        console.log(student.name + " has failed.");
    }
}

checkResult(student1);
checkResult(student2);
checkResult(student3);




let students = [student1, student2, student3];

console.log("----- All Students -----");

students.forEach(function(student) {
    console.log(
        student.name + 
        " | " + 
        student.course + 
        " | Marks: " + 
        student.marks
    );
});