interface Student {
   firstName: string;
   lastName: string;
   age: number;
   location: string;
}

const student1: Student = {
    firstName: "Ade",
    lastName: "Ademola",
    age: 13,
    location: "Mars",
};

const student2: Student = {
    firstName: 'Tori',
    lastName: 'Ten',
    age: 15,
    location: 'Moon',
}

const studentList = [student1, student2];
