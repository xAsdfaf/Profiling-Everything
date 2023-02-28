// link to page generation
const generateHTML = require('./src/generateHTML');

// profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// modules
const fs = require('fs');
const inquirer = require('inquirer');

// array for teams
const arrayTeam = [];
// prompt for adding a manager
const managerAdd = () => {
    return inquirer.prompt ([
        // asking for manager's full name
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the Managers full name!',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ('Please enter a name!');
                    return false;
                }
            }
        },
        // asking for the manager ID
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your manager ID number!',
            validate: inputName => {
                if  (isNaN(inputName)) {
                    console.log ("Please enter your ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        // asking for the manager's work email
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your work email!',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter your email!')
                    return false;
                }
            }
        },
        // asking for the office number for the manager
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter your office number!",
            validate: inputName => {
                if  (isNaN(inputName)) {
                    console.log ('Please enter your office number!')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    // function for adding the manager to the array
    .then(inputManager => {
        const  { name, id, email, numberOffice } = inputManager;
        const manager = new Manager (name, id, email, numberOffice);

        teamArray.push(manager);
        console.log(manager);
    })
};
// prompt for adding an employee
const employeeAdd = () => {
    console.log(`
    ////////////////////
    ADDING EMPLOYEES
    ////////////////////
    `);

    return inquirer.prompt ([
        //asking for the job they have
        {
            type: 'list',
            name: 'job',
            message: 'Please choose the job that best suits your job in the company!',
            choices: ['Engineer', 'Intern']
        },
        //asking for their name

        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name!',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ("Please enter your name!");
                    return false;
                }
            }
        },
        // asking for their employee ID number
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID number!',
            validate: inputName => {
                if  (isNaN(inputName)) {
                    console.log ("Please enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        // asking for their work email
        {
            type: 'input',
            name: 'email',
            message: "Please enter your work email!",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter your email!')
                    return false;
                }
            }
        },
        // asking for their github
        {
            type: 'input',
            name: 'github',
            message: "Please enter your GitHub username!",
            when: (input) => input.role === "Engineer",
            validate: inputName => {
                if (inputName ) {
                    return true;
                } else {
                    console.log ("Please enter your GitHub username!")
                }
            }
        },
        // asking for the school they are attending
        {
            type: 'input',
            name: 'school',
            message: "Please enter name of the school you attend!",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter your school's name!")
                }
            }
        },
        // confirmation for adding more employees
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Do you want to add more employees?',
            default: 'false'
        }
    ])
    // process for adding the employees data into the program
    .then(personalData => {

        let { name, id, email, job, github, school, confirmation } = personalData;
        let employee;
    // letting the code know which job they have
    // case if the employee is the engineer (note that the engineer asks for their github, instead of a school)
        if (job === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
    // case if the employee is an intern
        } else if (job === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }
    // pushing the employee to the array
        teamArray.push(employee);
    // confirmation ties in to repeat or end the function
        if (confirmation) {
            return employeeAdd(arrayTeam);
        } else {
            return arrayTeam;
        }
    })

};
