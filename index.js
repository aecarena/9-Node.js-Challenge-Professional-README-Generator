// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const {writeFile} = fs.promises
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title",
    },{
        type: "input",
        name: "description",
        message: "Project Description",
    },{
        type: "input",
        name: "installation",
        message: "Project Installation",
    }, {
        type: "input",
        name: "usage",
        message: "Project Usage",
    },{
        type: "list",
        name: "license",
        message: "Project License",
        choices: ["MIT", "ISC", "None"],
        filter(val) {
            return val.toLowerCase();
        }
    }, {
        type: "input",
        name: "contribution",
        message: "Project Contribution",

        
    },{
        type: "input",
        name: "test",
        message: "project test",
    },{
        type: "input",
        name: "questions",
        message: "Project Questions (email)",
    },{
        type: "input",
        name: "github",
        message: "Project GitHub (email)",
    }
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFile(path.join(process.cwd(), fileName,), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        
        writeToFile("./README2.md", generateMarkdown({ ...responses }))
        .then(() => {
            console.log("Professional README");
        }) 
    });

}

// Function call to initialize app
init();
