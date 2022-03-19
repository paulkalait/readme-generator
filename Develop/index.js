// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// const utils = require('./utils/generateMarkdown')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "what is the title of your project"
    
},
{
    type: "type",
    name: "git",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "description",
    message: "please provide a brief description of your project"
},
{
    type: "checkbox",
    name: "License",
    choices: ['MIT', 'BSD', 'Apache', 'GNU', 'Mozilla', 'None']
},
{   type: "input",
    name: "Installation",
    message: "What command must be entered to install dependencies?"
},
{   type: "input",
    name: "Tests",
    message: "What command must be entered to run tests"
},
{   type: "input",
    name: "usage",
    message: "What must the user know for usage of repository?"
},
{   type: "input",
    name: "contribution",
    //fix wording
    // what did the user contribute
    message: "provide details of contributing by the user"
}
];


// use fs.writeFileSync
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(answers => {
    //passingh through prompt answers into generatemarkdwon function Dynamically
    writeToFile("README.md", generateMarkdown(answers));
})

}

// Function call to initialize app
init();
