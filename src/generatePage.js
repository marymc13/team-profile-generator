const generateTeam = team => {
  console.log(team);

  const html= [];

const generateManager = manager => {
  console.log(manager)
  let managerHtml = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="manager-title mb-2 text-muted">Manager</h6>
    <p class="id">${manager.id}</p>
    <p class="email">Email:<a href="email">${manager.email}</a></p>
    <p class="officeNumber">${manager.officeNumber}</p>
  </div>
</div>
`;
html.push(managerHtml);
}
const generateEngineer = engineer => {
  console.log(engineer)
  let engineerHtml = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="engineer-title mb-2 text-muted">Engineer</h6>
    <p class="id">${engineer.id}</p>
    <p class="email">Email:<a href="email">${engineer.email}</a></p>
    <p class="githubUsername">${engineer.githubUsername}</p>
    <p class="githubLink">${engineer.githubLink}</p>
  </div>
</div>
`;
html.push(engineerHtml);
}
const generateIntern = intern => {
  console.log(intern)
  let internHtml = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="intern-title mb-2 text-muted">Intern</h6>
    <p class="id">${intern.id}</p>
    <p class="email">Email:<a href="email">${intern.email}</a></p>
    <p class="school">${intern.school}</p>
    
  </div>
</div>
`;
html.push(internHtml);
}

//loop all employees
for (let i = 0; i < team.length; i++) {
  if (team[i].getRole() === 'Manager') {
    generateManager(team[i]);
  }
  if (team[i].getRole() === 'Engineer') {
    generateEngineer(team[i]);
}
if (team[i].getRole() === 'Intern') {
  generateIntern(team[i]);
}
}

return html.join('');
}
const generatePage = data => {
  console.log(data);
   const html = generateTeam(data);
   console.log(html);

    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head> 
  <body>
  <header>
  <h1> My Team </h1>
  </header>
  <main>
   ${html}
  </main   >
  <h2><a href=></a></h2>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>
</html>
`;

};
module.exports = generatePage;

