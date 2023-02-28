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