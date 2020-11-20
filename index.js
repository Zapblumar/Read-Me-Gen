const fs = require('fs');

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
        message: "What do you need to install first?"
    },

    {
        type: 'checkbox',
        name: 'usage',
        message: "How do you use this?"
    },

    {
        type: 'input',
        name: 'credit',
        message: "Who deserves credit?"
    },

    {
        type: 'list(?)',
        name: 'license',
        message: "What license did you use?"
    },

    {
        type: 'input',
        name: 'badge',
        message: "What color badge do you want?"
    },

    {
        type: 'input',
        name: 'features',
        message: "What are you features (if any)?"
    },

    {
        type: 'input',
        name: 'contributers',
        message: "Who are the contributers?"
    }
]


prompt(questions)
    .then(answers => console.log(answers));

// function to initialize program
function init() {
    console.log("hello world")
}

// function call to initialize program
init();