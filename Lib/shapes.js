// shapes.js

class Shape {
  constructor() {
    this.color = 'black'; // Default shape color
  }

  setColor(color) {
    this.color = color;
  }

  // Method to be implemented by child classes
  getSVGString() {
    throw new Error('getSVGString() method must be implemented by child classes.');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getSVGString() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  getSVGString() {
    const halfSide = this.sideLength / 2;
    const height = (Math.sqrt(3) / 2) * this.sideLength;
    return `<polygon points="150,${100 - halfSide} ${150 - height},${100 + halfSide} ${150 + height},${100 + halfSide}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  getSVGString() {
    const halfSide = this.sideLength / 2;
    return `<rect x="${150 - halfSide}" y="${100 - halfSide}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
