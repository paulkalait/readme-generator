// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license == "None")
  if(license == "None"){
    return ""
  }
  return `![Badge](https://img.shields.io/badge/licence-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "None"){
    return ""
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "None"){
    return ""
  }
  return `
  ## License 
  This project is license under ${license}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.License)}
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## installation
  ${data.Installation}

  ${renderLicenseSection(data.License)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.Tests}

  ## Questions
  If you have any questions about this repository, please contact me via ${data.email}. You can view more of my projects at https://github.com/${data.git}
  
  
`;
console.log(data.Installation)
}

module.exports = generateMarkdown;
