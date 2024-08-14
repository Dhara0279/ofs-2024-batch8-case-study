import readline from 'readline-sync';
import fs from 'fs';
import { Employee } from './employee.js';

function addEmployee() {
    let id = readline.questionInt("Enter ID: ");
    let name = readline.question("Enter Name: ");
    let salary = readline.questionInt("Enter Salary: ");
    return new Employee(id, name, salary);
}

const filePath = 'prog.json';


let fileData = [];
if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fileData = JSON.parse(fileContent);
}


if (!Array.isArray(fileData)) {
    throw new Error('The JSON file does not contain an array.');
}

let employee = addEmployee();
fileData.push(employee);

const updatedJsonData = JSON.stringify(fileData, null, 2);


fs.writeFileSync(filePath, updatedJsonData, 'utf8');

console.log("Employees added successfully");

const content = fs.readFileSync(filePath, 'utf8');
fileData = JSON.parse(content);
console.log(fileData)