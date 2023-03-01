// creating constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// returning name input
    nameGet () {
        return this.name
    }
// returning id input
    idGet () {
        return this.id
    }
// returning email input
    emailGet () {
        return this.email
    }   

    jobGet () {
        return 'Employee';
    }
};
// exporting
module.exports = Employee;