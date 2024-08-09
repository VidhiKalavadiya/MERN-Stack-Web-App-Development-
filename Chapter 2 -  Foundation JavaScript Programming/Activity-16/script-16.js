
function isArmstrongNumber(number) {
  // Convert the number to a string to easily iterate over digits
  const numStr = number.toString();
  const numDigits = numStr.length;
  
  let sum = 0;
  
  // Iterate over each digit, convert to number, and compute the power sum
  for (let digit of numStr) {
      sum += Math.pow(parseInt(digit), numDigits);
  }
  
  // Check if the sum of powers equals the original number
  return sum === number;
}

// Example usage:
const num = 153;  // You can change this value to test with different numbers
console.log(num + " is an Armstrong number: " + isArmstrongNumber(num));
