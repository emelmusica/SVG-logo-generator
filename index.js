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
    let shapeSize;
    switch (userInputs.shape) {
      case 'circle':
        shapeSize = 160; // Adjust the size as needed to take up the majority of the page
        shape = new Circle(shapeSize);
        break;
      case 'triangle':
        shapeSize = 180; // Adjust the size as needed to take up the majority of the page
        shape = new Triangle(shapeSize);
        break;
      case 'square':
        shapeSize = 200; // Adjust the size as needed to take up the majority of the page
        shape = new Square(shapeSize);
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    // Generate the SVG string based on the shape and user's input
    const svgContent = shape.getSVGString(userInputs.shapeColor);

    // Calculate the position for centering the shape and text
    const centerX = 300 / 2;
    const centerY = 200 / 2;

    // Calculate the position for centering the text based on the font size and text length
    const fontSize = 30;
    const textLength = userInputs.text.length * fontSize;
    const textX = centerX - textLength / 2;
    const textY = centerY + fontSize / 3;

    // Generate the HTML content with the SVG content and centered text
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG Logo</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    svg {
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <!-- Insert the SVG content directly -->
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgContent}
    <text x="${textX}" y="${textY}" fill="${userInputs.textColor}" font-size="${fontSize}" font-family="Arial">${userInputs.text}</text>
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
