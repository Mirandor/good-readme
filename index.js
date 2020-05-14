// npm and js requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const path = require("path");
var generateMarkdown = require('./utils/generateMarkdown');

// chalk variables for console log
const errors = chalk.bold.bgRedBright;
const success = chalk.bold.black.bgGreenBright;

// init function & inquirer questions 
function init(){
  inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your GitHub name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "url",
    message: "What is the URL to your project?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description for your project."
  },
  {
    type: "input",
    name: "license",
    message: "What licenses should your project have?",
    default: "GitHub"
  },
  {
    type: "input",
    name: "install",
    message: "What command should be used to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be used to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What should users know about using the repo?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What do users need to know about contributing to the repo?"
  }
  ]).then(function(data){

  writeToFile("README.md", generateMarkdown({ ...data }));

  })

  function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
  }
};

init();