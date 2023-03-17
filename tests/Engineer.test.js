const Engineer = require('../lib/Engineer');
// creating engineer object
test('creates an Engineer object', () => {
    const employee = new Engineer('Hunter', 22, 'hoskarson@gmail.com', 'hoskarson');

    expect(employee.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const employee = new Engineer('Hunter', 22, 'hoskarson@gmail.com', 'hoskarson');

    expect(employee.githubGet()).toEqual(expect.stringContaining(employee.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Engineer('Hunter', 22, 'hoskarson@gmail.com', 'hoskarson');

    expect(employee.jobGet()).toEqual("Engineer");
});