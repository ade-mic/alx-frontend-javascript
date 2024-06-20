import { listOfStudents } from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map((student) => {
  return student.fullStudentDescription;
});

console.log(listPrinted);
