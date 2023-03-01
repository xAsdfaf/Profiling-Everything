const Employee = require('../lib/Employee');

// creating object for employee
test('gets the employees name', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getting name
test('gets employee name', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id
test('gets employee ID', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails
test('gets employee email', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role
test('gets role of employee', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});