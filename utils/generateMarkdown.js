function generateMarkdown(data) {
  return `
# ${data.title}
:${data.emoji}: 
[![${data.username}](https://img.shields.io/badge/GitHub-${data.username}-black?logo=github&style=flat-square)](${data.url})

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
Contact @${data.username} at <${data.email}> with any questions or issues.

## Acknowledgments
A list of resources used for this README generator
* [Shields.io](https://shields.io/)
* [GitHub Guide: Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
`
}; 

module.exports = generateMarkdown;