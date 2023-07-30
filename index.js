const inquirer = require('inquirer');
const path = require('path');
const { generateSVG } = require('./Lib/svggenerator.js');
const { Circle, Triangle, Square } = require('./Lib/shapes.js');

async function promptUser() {
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

    // Create the shape based on the user's input
    let shape;
    switch (userInputs.shape) {
      case 'circle':
        shape = new Circle(30);
        break;
      case 'triangle':
        shape = new Triangle(40);
        break;
      case 'square':
        shape = new Square(50);
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    // Generate the SVG string based on the shape and user's input
    const svgContent = shape.getSVGString(userInputs.shapeColor);

    // Write the SVG content to the file
    await generateSVG(outputPath, svgContent);
    console.log(`Generated ${fileName}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();
