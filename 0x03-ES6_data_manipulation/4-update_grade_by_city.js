export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentByCity = studentList.filter((student) => student.location === city);
  const gradeByCity = studentByCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
  });
  return gradeByCity;
}
