interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

let student1: Student = {
  firstName: 'Mesfin',
  lastName: 'Mul',
  age: 28,
  location:'Ethiopia'
}

let student2: Student = {
  firstName: 'Mes',
  lastName: 'Mulu',
  age: 23,
  location:'Ethiopia'
}

let studentsList = [student1, student2];

let cell = document.createElement("h1")
const cellText = document.createTextNode(`cell in row , column `);
cell.appendChild(cellText)