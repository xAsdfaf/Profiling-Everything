const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, numberOffice) {
        super(name, id, email);

        this.numberOffice = numberOffice;
    }

    schoolGet() {
        return this.numberOffice;
    }

    jobGet() {
        return 'Manager';
    }

};

module.exports = Manager;
