const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    githubGet() {
        return this.github;
    }

    jobGet() {
        return 'Engineer';
    }

};

module.exports = Engineer;
