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
