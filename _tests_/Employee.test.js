const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Mary', 4, 'mary@domain.com', 435);

expect(employee.name).toEqual(expect.any(String));
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
});