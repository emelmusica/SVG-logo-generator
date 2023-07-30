const fs = require('fs');

function generateSVG(filePath, svgContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, svgContent, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  generateSVG,
};

// Test the SVG generation for each shape
const { Circle, Triangle, Square } = require('./shapes');

const circle = new Circle(30);
console.log(circle.getSVGString('blue'));

const triangle = new Triangle(40);
console.log(triangle.getSVGString('red'));

const square = new Square(50);
console.log(square.getSVGString('green'));
