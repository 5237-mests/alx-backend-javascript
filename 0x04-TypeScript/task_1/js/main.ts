interface Teacher {
  firstName : string,
  lastName: string,
  fullTimeEmployee : boolean,
  yearsOfExprience?: number,
  location: string,
  contract?: boolean
}


interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  name: string;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}
