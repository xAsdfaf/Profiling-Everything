const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Hunter', 22, 'hoskarson@gmail.com', 2001);

    expect(manager.numberOffice).toEqual(expect.any(Number));
});
