// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}/${data.username}/${data.repoName}
  ## Description
  ${data.description}
  ## license
  ${data.license}
  /## command${data.command}
  /## info/${data.info}
  /## contributing/${data.contributing}
  /## Questions/- Github Profile:[${data.username}](www.github.com/${data.username})/ - Contact:${data.email}
 `;

}

module.exports = generateMarkdown;
