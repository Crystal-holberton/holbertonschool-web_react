interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
};

interface StudentInterface{
  workOnHomework(): string;
  displayName(): string;
};

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
};

console.log('Teacher:', teacher3);

console.log('Director:', director1);

console.log(printTeacher("John", "Doe"));

const student = new StudentClass("Bob", "Johnson");
console.log(student.displayName());
console.log(student.workOnHomework());

const Name = document.createElement("p");
Name.textContent = "Name: " + student.displayName();
const homework = document.createElement("p");
homework.textContent = student.workOnHomework();
document.body.appendChild(Name);
document.body.appendChild(homework);
