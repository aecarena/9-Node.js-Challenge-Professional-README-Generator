// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
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


// TODO: Create a function to initialize app
function init() {
    const UserInput = inquirer.prompt(questions);
    
    UserInput.then((data) => {
        const readMeContent = generateMarkdown(data);
        const filePathAndName = './README2.md';
        
        fs.writeFile(filePathAndName, readMeContent, "utf8", (err)=>{ if(err) console.error(err); });
    });

};

// Function call to initialize app
init();
