// array of questions for user
var inquirer = require('inquirer');
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    // Title, description, input,Installation, Usage, License, Contributing, Tests, and Questions
    var questions = [
        {
          type: 'input',
          name: 'title',
          message: "What's the project title?",
        },
        {
          type: 'input',
          name: 'description',
          message: "Please type your description",
          default: function () {
            return 'Doe';
          },
        },
        {
          type: 'input',
          name: 'Installation',
          message: "How will you install this project?",
          
        
        },
        {
            type: 'input',
            name: 'Use',
            message: "What will it be the usage for your project?",
            
         
        },
        {
            type: 'input',
            name: 'License',
            message: "What license does your project have?",
            
         
        },
        {
            type: 'input',
            name: 'Contributing',
            message: "How will you someone contribute to your project?",
            
         
        },
        {
            type: 'input',
            name: 'Test',
            message: "How will you test your project?",
            
         
        },
        {
            type: 'input',
            name: 'Questions',
            message: "If someone has questions how they will contact you?",
            
         
        },
      ];
      
      inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
      });
    }
// function call to initialize program
init();
