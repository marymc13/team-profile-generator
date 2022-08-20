const Employee = require('./Employee.js');

class Engineer extends Employee  {
    constructor (name, id, email, githubUsername, githubLink) {
        super (name, id, email);
        
        this.githubUsername = githubUsername;
        this.githubLink = githubLink; 
    }
    getGithubLink() {
        return this.githubLink;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;