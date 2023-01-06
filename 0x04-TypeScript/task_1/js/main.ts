interface Teacher {
  readonly firstName : string;
  readonly lastName: string;
  fullTimeEmployee : boolean;
  yearsOfExprience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number,
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string):string {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this._firstName;
  }
}

export function createStudent(ctor: StudentClassConstructor, firstName: string, lastName: string): StudentClassInterface {
  return new ctor(firstName, lastName);
}