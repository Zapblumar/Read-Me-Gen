// function to generate markdown for README
function generateMarkdown(answers) {
  const { title, desctiption, installation, link, info, license, usage, credit } = answers
  return ` # ${title}
![License: MIT](https://img.shields.io/badge/License-${license}-Cyan.svg)
## Table of contents
* [Desctiption of the Project](#desctiption-of-the-project)
* [Build with](#build-with)
* [License](#license)
* [Githun Link](#github-link)
* [Screenshot](#screenshot)
* [Credit](#credit)
* [Test](#test)
## Desctiption of the Project 
${desctiption}
## Build With
${installation}
## License
https://choosealicense.com/licenses/${license}/
## Github Link
${link}
## Screenshot
${usage}
## Credit 
${credit}
## Test
"First you clone the repo into whichever file you want, then you type node index.js to use it."`
}
module.exports = generateMarkdown;

