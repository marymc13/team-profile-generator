const fs = require('fs');
const inquirer = require('inquirer');

//const path = require('path');
//const OUTPUT_DIR = path.resolve(_dirname);
//const outputPath = path.join(OUTPUT_DIR, 'index.html');
const generatePage = require('./src/generatePage.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const profileTeamArray = [];

//Run application function
function runApp() {

//switch statement to choose employee role
const promptMenu = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'menu',
        message: "Please choose a team member. ",
        choices: ['Manager', 'Engineer', 'Intern', 'Finish building my team.']
    }])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "Manager":
            promptManager();
            break;
            case "Engineer":
            promptEngineer();
            break;
            case "Intern":
            promptIntern();
            break;
            default:
                buildTeam();
        }
    });
    };

const promptManager = () => {
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
    promptMenu();
})

};


//employee information

const promptEngineer = () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    return inquirer.prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },

        {
            type: 'input',
            name: 'githubUsername',
            message: "Please enter the engineer's GitHub username.",
        },

        {
            type: 'input',
            name: 'githubLink',
            message: "Please enter the engineer's GitHub link.",
        },
   ])

    .then(engineerData => {
    const engineer = new Engineer (engineerData.name, engineerData.id, engineerData.email, engineerData.githubUsername, engineerData.githubLink);
    profileTeamArray.push(engineer);
    console.log(engineer);
    promptMenu();
    })
};

 const promptIntern = () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
        },
    ])
    .then(internData => {
        const intern = new Intern (internData.name, internData.id, internData.email, internData.school);
        profileTeamArray.push(intern);
        console.log(intern);
        promptMenu();
        })
    };

    const buildTeam = () => {
        console.log (`
         ===============
         Build my team! 
         ===============  
         `)
    }
    buildTeam()
    .then(employeeData => {
        return promptManager(employeeData)
    })
    .then(employeeData => {
        return promptEngineer(employeeData)
    })
    .then(employeeData => {
        return promptIntern(employeeData)
    })

    .then(data => {
        console.log(data);
        return generatePage(data);
    })
    .then(newFile => {
        return createFile(newFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });

//create index.html
const createFile = (profileTeamArray) => {
        fs.writeFile('./dist/index.html', generatePage(profileTeamArray), 'utf-8');
}

promptMenu();
}
runApp();

