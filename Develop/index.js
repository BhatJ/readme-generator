// Include packages needed for this application
const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown");

const { writeFile } = require('fs').promises;

// An array of questions needed to generate the readme file
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use the application?",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT", "Other"],
    message: "How is the project licensed?"
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()

        // .then((answers) => writeFile('README.md', markdownGenerator.generateMarkdown(answers)))
        // .then(() => console.log('Successfully wrote to index.html'))
        // .catch((err) => console.error(err));
        .then((answers) => console.log(answers))
        .catch((err) => console.log(err));
}

// Function call to initialize app
init();
