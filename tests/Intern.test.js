const Intern = require('../lib/Intern');

// creating object for intern
test('creates an Intern object', () => {
    const intern = new Intern('Hunter', 22, 'hoskarson@gmail.com');

    expect(intern.school).toEqual(expect.any(String));
});

// gets role from jobGet() function
test('gets role of employee', () => {
    const intern = new Intern('Hunter', 22, 'hoskarson@gmail.com');

    expect(intern.jobGet()).toEqual("Intern");
});

// gets school from schoolGet() function
test('gets employee school', () => {
    const intern = new Intern('Hunter', 22, 'hoskarson@gmail.com');

    expect(intern.schoolGet()).toEqual(expect.stringContaining(intern.school.toString()));
});

