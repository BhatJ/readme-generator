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
    type: "input",
    name: "tests",
    message: "How did you test the application?",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT", "GNU GPL", "Apache", "None"],
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

// A function to initialize app
const init = () => {
    // Ask user questions via command line
    promptUser()

        // Generate readme file with the users answers
        .then((answers) => writeFile('README.md', markdownGenerator.generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
