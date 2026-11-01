

let students = [
    {
        id: 1,
        name: "Ankit Raj",
        course: "B.Tech CSE",
        marks: 85
    },

    {
        id: 2,
        name: "Rahul Kumar",
        course: "B.Tech IT",
        marks: 78
    },

    {
        id: 3,
        name: "Priya Singh",
        course: "BCA",
        marks: 92
    }
];




let studentForm = document.getElementById("studentForm");

let studentName = document.getElementById("studentName");

let studentCourse = document.getElementById("studentCourse");

let studentMarks = document.getElementById("studentMarks");

let studentList = document.getElementById("studentList");

let studentCount = document.getElementById("studentCount");

let searchInput = document.getElementById("searchInput");




function calculateGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    else if (marks >= 80) {
        return "A";
    }

    else if (marks >= 70) {
        return "B";
    }

    else if (marks >= 60) {
        return "C";
    }

    else if (marks >= 50) {
        return "D";
    }

    else {
        return "F";
    }
}




function displayStudents(studentArray = students) {

    studentList.innerHTML = "";

    studentCount.textContent = studentArray.length;



    if (studentArray.length === 0) {

        studentList.innerHTML = `
            <p class="empty-message">
                No student records found.
            </p>
        `;

        return;
    }


  

    studentArray.forEach(function(student) {

        

        let studentCard = document.createElement("div");

        studentCard.className = "student-card";


     

        let grade = calculateGrade(student.marks);



        studentCard.innerHTML = `

            <div class="student-info">

                <h3>${student.name}</h3>

                <p>
                    <strong>Course:</strong>
                    ${student.course}
                </p>

                <p>
                    <strong>Marks:</strong>
                    ${student.marks}
                </p>

                <p>
                    <strong>Grade:</strong>
                    ${grade}
                </p>

            </div>

            <button
                class="delete-btn"
                onclick="deleteStudent(${student.id})"
            >
                Delete
            </button>

        `;



        studentList.appendChild(studentCard);

    });
}




function addStudent(name, course, marks) {

    let newStudent = {

        id: Date.now(),

        name: name,

        course: course,

        marks: Number(marks)

    };



    students.push(newStudent);



    displayStudents();

}



function deleteStudent(id) {

    students = students.filter(function(student) {

        return student.id !== id;

    });


  

    displayStudents();

}


studentForm.addEventListener("submit", function(event) {


    event.preventDefault();


    

    let name = studentName.value.trim();

    let course = studentCourse.value;

    let marks = studentMarks.value;


    

    if (
        name === "" ||
        course === "" ||
        marks === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


  

    addStudent(name, course, marks);


    

    studentForm.reset();

});




searchInput.addEventListener("input", function() {

    let searchValue =
        searchInput.value.toLowerCase();


    let filteredStudents = students.filter(
        function(student) {

            return student.name
                .toLowerCase()
                .includes(searchValue);

        }
    );


    displayStudents(filteredStudents);

});



displayStudents();