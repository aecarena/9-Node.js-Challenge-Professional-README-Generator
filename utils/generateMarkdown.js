function getLicenseBadge(answers){
  const answerLicense = answers.license;
  switch(answerLicense){
    case "mit":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
      case "ISC":
     return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
      case "NONE":
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    }
  }
  function getLicense(answers){
  const answerLicense = answers.license;
  switch(answerLicense){
      case "mit":
          return '[Read MIT License](https://opensource.org/licenses/MIT)';
          break;
        case "isc":
            return '[Read ISC License](https://opensource.org/licenses/ISC)';
            break;
        case "none":
          return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
          break;
  }
}

      



  //console.log(text)
  
  //fs.writeFile("./README2.md", text, "utf-8",(err) => {})
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Questions](#questions)
    - [Github](#github)
    - [License](#license)
    
    
## Description
${answers.description}
    
## Installation
${answers.installation}
    
## Usage
${answers.usage}
    
## Contribution
${answers.contribution}
    
## Test
${answers.test}
    
## Questions
${answers.questions}
    
## Github
${answers.github}
    
    
## License
${getLicense(answers)}
    
`;
}

module.exports = generateMarkdown;
