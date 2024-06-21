export default function getStudentsByLocation(arr, city) {
  const locFilter = arr.filter((student) => student.location === city);
  return locFilter;
}
