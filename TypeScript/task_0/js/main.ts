interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstname: "Bob",
  lastname: "Johnson",
  age: 22,
  location: "Victoria",
};

const student2: Student = {
  firstname: "Alice",
  lastname: "Wonderland",
  age: 25,
  location: "New South Wales",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.border = "1";

const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstname;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
