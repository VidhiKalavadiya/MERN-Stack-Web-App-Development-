function printPyramid(height) {
  for (let i = 1; i <= height; i++) {
      // Print leading spaces
      let spaces = ' '.repeat(height - i);
      // Print stars
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
  }
}

// Example usage:
const pyramidHeight = 5;  // You can change this value to adjust the height of the pyramid
printPyramid(pyramidHeight);
