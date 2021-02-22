const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile)

// inquirer function prompting user with 
function promptUser() {
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?'
        },
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?'
        },
        {
            type:'input',
            name:'description',
            message:'Write a brief description of your project.'
        },
        {
            type:'input',
            name:'installation',
            message:'How do you install this application?'
        },
        {
            type:'input',
            name:'usage',
            message:'What does the user need to know about using the repo? '
        },
        {
            type:'list',
            name:'license',
            message:'What kind of license should your project have?',
            choices:["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type:'input',
            name:'contribute',
            message:'What does the user need to know about contributing to the repo?'
        },
        {
            type:'input',
            name:'tests',
            message:'What command should be used to run tests?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'github',
            message:'What is your Github username? '
        },

    ])
} 



// Init function thats runs inquirer prompt and generates new readme file
function init() {
    promptUser().then(function(data){
        const markdown = generateMarkdown(data);
        return writeFileAsync('./generated/generatedREADME.md', markdown);
    
    }).then(function (){
        console.log('Generating README.md ...')
    }).catch(function(err){
        console.log(err)
    });
}

// Function call to initialize app
init();
