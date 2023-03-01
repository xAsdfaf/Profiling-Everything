const Engineer = require('../lib/Engineer');

// creating engineer object
test('creates an Engineer object', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Hunter', 22, 'hoskarson@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});