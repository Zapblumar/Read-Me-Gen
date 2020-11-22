// function to generate markdown for README
function generateMarkdown(answers) {
  const { title, desctiption, installation, link, info, license, usage, credit } = answers
  return ` # ${title}
![License: MIT](https://img.shields.io/badge/License-${license}-Cyan.svg)
## Table of contents
* [desctiption of the Project](#desctiption-of-the-project)
* [Built with](#built-with)
* [License](#license)
* [Githun Link](#github-link)
* [screenshot](#screenshot)
* [credit](#credit)
## desctiption of the Project 
${desctiption}
## Build With
${installation}
## License
https://choosealicense.com/licenses/${license}/
## Github Link
${link}
## screenshot
${usage}
## credit 
${credit}`
}
module.exports = generateMarkdown;

