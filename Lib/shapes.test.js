const { Circle, Triangle, Square } = require('./shapes');

test('Circle should return correct SVG string', () => {
  const circle = new Circle(30);
  const svgString = circle.getSVGString('red');
  expect(svgString).toBe('<circle cx="150" cy="100" r="30" fill="red" />');
});

test('Triangle should return correct SVG string', () => {
  const triangle = new Triangle(40);
  const svgString = triangle.getSVGString('blue');
  expect(svgString).toBe(
    '<polygon points="150,80 110,120 190,120" fill="blue" />'
  );
});

test('Square should return correct SVG string', () => {
  const square = new Square(50);
  const svgString = square.getSVGString('green');
  expect(svgString).toBe(
    '<rect x="125" y="75" width="50" height="50" fill="green" />'
  );
});
