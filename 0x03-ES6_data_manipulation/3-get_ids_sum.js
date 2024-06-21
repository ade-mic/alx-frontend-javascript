export default function getStudentIdsSum(arr) {
  const sumId = arr.reduce((acc, student) => acc + student.id, 0);
  return sumId;
}
