const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
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
    const fileName = 'svglogo.html';
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

    // Generate the HTML content with the SVG content
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG Logo</title>
</head>
<body>
  <!-- Insert the SVG content directly -->
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgContent}
    <text x="150" y="100" fill="${userInputs.textColor}" text-anchor="middle" font-size="30">${userInputs.text}</text>
  </svg>
</body>
</html>
    `;

    // Write the HTML content to the file
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Generated ${fileName}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();
