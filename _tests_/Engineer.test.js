const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
 const engineer = new Engineer('Mary', 4, 'mary@domain.com','marymc13', 'mary@github.com');

expect(engineer.id).toEqual(expect.any(Number));
expect(engineer.email).toEqual(expect.any(String));
expect(engineer.githubUsername).toEqual(expect.any(String));
expect(engineer.getGithubLink()).toEqual(expect.any(String));

})