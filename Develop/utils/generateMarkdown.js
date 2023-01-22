// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributions)
6. [Tests](#tests)
7. [Questions](#questions)

## description
${data.description}

## installation
${data.installation}

## usage
${data.usage}

## license
${data.license}

## contributions
${data.github}

## tests
${data.tests}

## questions
${data.email}
`;
}

module.exports = {
  generateMarkdown: generateMarkdown
}
