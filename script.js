// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function() {
  var firstName = prompt("Enter your first name");
  var lastName = prompt("Enter your last name");
  var salary = parseInt(prompt("Enter salary"));
  
  if(isNaN(salary)){
    salary = 0
  }

  var employeeList = []
  
  var employeeData = {
    firstName,
    lastName,
    salary,
  }
  employeeList.push(employeeData);

  addAnotherEmployee = confirm("Do you want to add another employee?")

  while (addAnotherEmployee === true) {
    var firstName = prompt("Enter your first name");
  var lastName = prompt("Enter your last name");
  var salary = parseInt(prompt("Enter salary"));
  if(isNaN(salary)){
    salary = 0
  }
  var employeeData = {
    firstName,
    lastName,
    salary,
  }
  employeeList.push(employeeData);

  addAnotherEmployee = confirm("Do you want to add another employee?")
  }
  return employeeList;
}






// Display the average salary
const displayAverageSalary = function(employeesArray) {
 console.log(employeesArray);

 var sum = 0
 
 for (i= 0; i<employeesArray.length; i++) {
  console.log(employeesArray[i].salary);
  sum +=employeesArray[i].salary;
 };
 console.log(sum);

 var averageSalary = sum / employeesArray.length

 console.log("The average salary between our employee(s) is = ", averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  console.log(employeesArray);
  var randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];

  console.log("One random employeee!!  === > ", employeesArray[Math.floor(Math.random() * employeesArray.length)])
  console.log(randomEmployee);
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
