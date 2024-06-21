export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const id = arr.map((student) => student.id);
    return id;
  }
  return [];
}
