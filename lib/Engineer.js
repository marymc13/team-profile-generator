const Employee = require('./Employee.js');

class Engineer  {
    constructor (name, id, email, githubUsername, githubLink) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.githubUsername = githubUsername,
        this.githubLink = githubLink 
    }
    getGithubLink() {
        return this.githubLink;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;