
const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
const manager = new Manager('Mary', 1, 'mary@domain.com', 435);

expect(manager.id).toEqual(expect.any(Number));
expect(manager.email).toEqual(expect.any(String));
expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Mary', 1, 'mary@domain.com', 435);

    expect(manager.getRole()).toEqual('Manager');
});