const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('mary', 4, 'mary@domain.com','USF');

expect(intern.id).toEqual(expect.any(Number));
expect(intern.email).toEqual(expect.any(String));
expect(intern.school).toEqual(expect.any(String));

})

