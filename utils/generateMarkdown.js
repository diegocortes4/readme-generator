// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


module.exports = generateMarkdown;

// "title": "none",
//   "description": "description",
//   "Installation": "installer",
//   "Use": "usage",
//   "License": "license",
//   "Contributing": "na",
//   "Test": "test",
//   "Questions": "emal"