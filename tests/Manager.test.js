const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
test('creates a Manager object', () => {
    const manager = new Manager('Hunter', 22, 'hoskarson@gmail.com');

    expect(manager.numberOffice).toEqual(expect.any(String));
});

test('creates a Manager object', () => {
    const manager = new Manager('Hunter', 22, 'hoskarson@gmail.com');

    expect(manager.numberOffice).toEqual(expect.any(String));
});