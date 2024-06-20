export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a number}');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (students.every((item) => typeof item === 'string') === true) {
      this._students = students;
    } else {
      throw new TypeError('Students must be a array');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLenhth) {
    this._length = newLenhth;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
