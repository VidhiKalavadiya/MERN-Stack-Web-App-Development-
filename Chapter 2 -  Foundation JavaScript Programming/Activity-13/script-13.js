function printDiamond(height) {
  if (height < 1) {
      console.log("Height must be a positive integer.");
      return;
  }

  // Upper part of the diamond
  for (let i = 1; i <= height; i++) {
      // Print leading spaces
      let spaces = ' '.repeat(height - i);
      // Print stars
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
  }

  // Lower part of the diamond
  for (let i = height - 1; i >= 1; i--) {
      // Print leading spaces
      let spaces = ' '.repeat(height - i);
      // Print stars
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
  }
}

// Example usage:
const diamondHeight = 5;  // You can change this value to adjust the height of the diamond
printDiamond(diamondHeight);
