
// markdown function
function generateMarkdown(data) {

  if (data.license == "MIT") {
    data.license = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)"
  } else if (data.license == "APACHE 2.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (data.license == "GPL 3.0") {
    data.license = "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)"
  } else if (data.license == "BSD 3") {
    data.license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    data.license = ""
  }


  return `# ${data.title}
  
${data.license}

## Description 
${data.description}


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact-me)


## Installation
In order to install the necessary dependencies, open the console and run the following.
${data.installation}

## Usage 
${data.usage}


## License
This project is licensed under :
\n
${data.license}
\n
Click on the badge for further information.


## Contributing
${data.contribute}


## Tests
In order to test open the console and run the following:

${data.tests}

## Contact Me
 If you have any further questions message me on [GitHub](https://github.com/${data.github}),
 or send me an email to \n
 ${data.name}: ${data.email}.

`;
}

module.exports = generateMarkdown;
