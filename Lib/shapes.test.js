// shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('getSVGString() method returns the correct SVG string', () => {
    const circle = new Circle(30);
    circle.setColor('blue');
    expect(circle.getSVGString()).toEqual('<circle cx="150" cy="100" r="30" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('getSVGString() method returns the correct SVG string', () => {
    const triangle = new Triangle(40);
    triangle.setColor('red');
    expect(triangle.getSVGString()).toEqual(
      '<polygon points="150,60 110,140 190,140" fill="red" />'
    );
  });
});

describe('Square', () => {
  test('getSVGString() method returns the correct SVG string', () => {
    const square = new Square(50);
    square.setColor('green');
    expect(square.getSVGString()).toEqual(
      '<rect x="125" y="75" width="50" height="50" fill="green" />'
    );
  });
});
