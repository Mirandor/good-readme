function generateMarkdown(data) {
  return `
# ${data.title}
[![${data.license} license](https://img.shields.io/github/license/${data.username}/${data.title}?label=GitHub&logo=github)](${data.url})

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Run the following command(s) to install necessary dependencies.
\`\`\`\`
${data.install}
\`\`\`\`
## Usage
${data.usage}

## License
This project's licenses include ${data.license}

## Contributing
${data.contributing}

## Tests
\`\`\`\`
${data.tests}
\`\`\`\`
## Questions
Contact [@${data.username}](${data.email})
`
}; 

module.exports = generateMarkdown;