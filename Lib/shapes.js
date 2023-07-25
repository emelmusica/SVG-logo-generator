class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getSVGString(color) {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${color}" />`;
    }
  }
  
  class Triangle {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    getSVGString(color) {
      const halfSide = this.sideLength / 2;
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      return `<polygon points="150,${100 - halfSide} ${150 - height},${100 + halfSide} ${150 + height},${100 + halfSide}" fill="${color}" />`;
    }
  }
  
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    getSVGString(color) {
      const halfSide = this.sideLength / 2;
      return `<rect x="${150 - halfSide}" y="${100 - halfSide}" width="${this.sideLength}" height="${this.sideLength}" fill="${color}" />`;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  