// creating constructor
class Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    // returning name input
    nameGet() {
        return this.name
    }
    // returning id input
    idGet() {
        return this.id
    }
    // returning email input
    emailGet() {
        return this.email
    }

    githubGet() {
        return this.github
    }

    jobGet() {
        return 'Employee';
    }
};
// exporting
module.exports = Employee;