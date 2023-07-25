const inquirer = require('inquirer');
const path = require('path');
const { generateSVG } = require('./lib/svgGenerator');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length > 0 && input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
      default: 'black',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
      default: 'blue',
    },
  ]);
}

async function run() {
  try {
    const userInputs = await promptUser();
    const fileName = 'logo.svg';
    const outputPath = path.join(__dirname, fileName);

    await generateSVG(outputPath, userInputs);
    console.log(`Generated ${fileName}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();
