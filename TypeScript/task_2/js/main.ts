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
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
      return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

type Employee = Director | Teacher;

function createEmployee(salary: number | string): Employee {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee("$500"));

function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  throw new Error(`Invalid subject: ${todayClass}`);
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
