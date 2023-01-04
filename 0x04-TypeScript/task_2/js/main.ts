interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(){
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(){
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number) {
  if ( typeof(salary) === 'number' && salary < 500) {
    return new Teacher;
  }
  return new Director;
}

function isDirector(employee2: Teacher | Director) {
  if (employee2 instanceof Director) return true;
  return false;
}

function executeWork(employee: Teacher | Director) {
  let emp = isDirector(employee);
  if(emp){
    let dir = new Director;
    console.log(dir.workDirectorTasks())
  } else {
    let teach = new Teacher;
    console.log(teach.workTeacherTasks())
  }
}

