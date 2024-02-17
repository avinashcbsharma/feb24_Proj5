/** @format */

let students = [
{ id:1, name: "john", age:"18", marks:80 }, 
{ id:2, name: "jack", age:"20", marks:85 }, 
{ id:3, name: "karen", age:"19", marks:35 }

]

  
function PrintStudentswithMap() {
    console.log("\nStudents above 50 marks using map()");
    const StudentsAbove50 = students
      .filter(student => student.marks > 50)
      .map(student => `Id N0.:${student.id} Name: ${student.name} Obtained marks: ${student.marks} age: ${student.age}`);  
    
    console.log(StudentsAbove50);  
}

 function PrintStudentsbyForEach(){
    console.log("\nStudents above 50 marks using forEach()");

    const StudentsAbove50 = students.filter(student => student.marks > 50); 

    StudentsAbove50.forEach(studentDetail => console.log(studentDetail));
}



function addData(){
    console.log("\nStudents List After Adding new record");
    const moreStudent = {id:4,name:"susan",age:"20",marks:45};
    students.push(moreStudent);

    console.log(students);    
}



function removeFailedStudent(){
    console.log("\nStudents List After deleting failed record");
    
    const newobj = students.filter(student => !(student.marks < 50));
    console.log(newobj);
   
}


//concating Arrays
//other Array of objects
const arr2 =[
    {id:11, name: 'Alice', age :"20", marks: 45 }, 
    { id:12, name: "Eva", age:"23", marks:65 }, 
    { id:13, name: "Laren", age:"29", marks:85 }
]
function concatenateArray(){
    console.log("\nStudents List After concatenate");
    const arr = students.concat(arr2);
    console.log(arr);
}
