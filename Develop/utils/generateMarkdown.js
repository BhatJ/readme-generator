// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    default:
      return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "MIT":
      return `
    Copyright 2023 JBhat
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
     
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;

    case "GNU GPL":
      return `
    This license, commonly known as the GPL, has two versions that are actively and widely used in many open source communities:

    * GNU General Public License, version 2 (SPDX short identifier: GPL-2.0)
    * GNU General Public License, version 3 (SPDX short identifier: GPL-3.0)
   
    If you have licensed software you've written under GPL version 2, and you are the original licensor of that software, you may wish to relicense your software under GPL version 3.
      
    Most GPL version 2 software is actually licensed as "GPL version 2 or any later version", or words to similar effect, which is commonly understood as a grant under GPL version 2, section 9 of an "option to follow the terms and conditions . . . of any later version" of the GPL. In this case, even if you are not the original licensor of the GPL version 2 software, you can "follow the terms and conditions" of GPL version 3 instead. This is not commonly done (at least in any explicit way), however.
    `;
    case "Apache":
      return `
    Copyright [2023] [JBhat]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
   
    http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `;
    default:
      return "";
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

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
