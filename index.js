const fs = require('fs');
const inquirer = require("inquirer")
const generateMarkdown = require("./develop/utils/generateMarkdown")
// array of questions for user
const question = [
    ,
    ,
    "table of context...",
    ,
    ,
    ,
    ,
    ,
    ,

];

// function to write README file
function writeToFile(fileName, data) {
}

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title?"
    },

    {
        type: 'input',
        name: 'desctiption',
        message: "Give a short desctiption?"
    },

    {
        type: 'checkbox',
        name: 'installation',
        message: "What do you need to install first?",
        choices: ["node", "javascript", "css", "jquary", "html", "ES6"]
    },

    {
        type: 'input',
        name: 'usage',
        message: "put screenshot here please?"
    },

    {
        type: 'input',
        name: 'credit',
        message: "Who deserves credit?"
    },

    {
        type: 'list',
        name: 'license',
        message: "What license did you use?",
        choices: ["unlicensed", "DUB:", "wtfpl", "Hex.pm:",]
    },

    {
        type: 'input',
        name: 'link',
        message: "what is you github?"
    }

]




// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {

            fs.writeFileSync("./README.md", generateMarkdown(answers))

            const data = fs.readFileSync("./README.md", generateMarkdown(answers))

        })
}
// function call to initialize program
init();