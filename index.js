const generateHTML = require('./src/generateHTML')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const profileTeamArray = [];

//manager information
const addManager = () => {
return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of the manager?',
    validate: nameInput => {
if (nameInput) {
    return true;
} else {
    console.log("Please enter manager's name!");
    return false;
}
    }
    },

    {
       type: 'input',
       name: 'id',
       message: "What is the id number?",
       validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log("Please enter id number!");
            return false; 
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: "Please enter manager's email address.",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter email address!");
            return false; 
        }
    }
},

{
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's office number?",
    validate: officeNumberInput => {
        if (officeNumberInput) {
            return true;
        } else {
            console.log("Please enter office number!");
            return false; 
        }
    }
}
])

.then(managerData => {
    const manager = new Manager (managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    profileTeamArray.push(manager);
    console.log(manager)
})

};

//employee information

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            choices: ['Engineer, Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
        },

        {
            type: 'input',
            name: 'githubUsername',
            message: "Please enter the employee's GitHub username.",
        },

        {
            type: 'input',
            name: 'githubLink',
            message: "Please enter the employee's GitHub link.",
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(employeeData => {
       if (employeeData.role === 'Engineer') {
        const Engineer = new Engineer (employeeData.name, employeeData.id, employeeData.email, employeeData.githubUsername, employeeData.githubLink);
         profileTeamArray.push(engineer);  
    } else if (employeeData.role === 'Intern') {
        const intern = new Intern (employeeData.name, employeeData.id, employeeData.email, employeeData.school);
        profileTeamArray.push(intern);
    }
    })
};

//create index.html

