const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);
const liscenseArray = ["MIT","APACHE 2.0","GPL 3.0","BSD 3","NONE"]
const commandLine = ["npm install"]
// array of questions for user
inquirer
.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
      },
    {
        type: 'input',
        name: 'description',
        message: 'please write a short description of your project'
    },
    {
      type: 'input',
      name: 'repoName',
      message: 'What is your repos name?'
  },
    {
        type: 'checkbox',
        name: 'liscense',
        message: 'What kind of liscense should your project have?',
        choices: liscenseArray,
    },
    {
        type: 'checkbox',
        name: 'command',
        message: 'what command should run to install the dependecies',
        choices: commandLine,
      },
      {
        type: 'input',
        name: 'info',
        message: 'what does the user need to know about using the repo',
        
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'what does the user need to know about contributing to the repo',

      },


  ]).then(answers => {
          console.log('success', answers)
        
         var userInputString = generateMarkdown(answers)
         
         return writeFileAsync("README.md", userInputString);
  })
// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program