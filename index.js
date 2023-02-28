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

const managerAdd = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the Managers full name:',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your manager ID:',
            validate: inputName => {
                if  (isNaN(inputName)) {
                    console.log ("Please enter your ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email!',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false;
                }
            }
        },
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
};