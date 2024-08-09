function generateFibonacci(terms) {
  let fibonacciSeries = [];
  
  if (terms <= 0) {
      return "Please enter a positive number of terms.";
  }

  // Initial values
  let a = 0, b = 1;
  
  for (let i = 0; i < terms; i++) {
      fibonacciSeries.push(a);
      let nextTerm = a + b;
      a = b;
      b = nextTerm;
  }
  
  return fibonacciSeries;
}

// Example usage:
const numberOfTerms = 10;  // You can change this value to generate a different number of terms
const fibonacciSeries = generateFibonacci(numberOfTerms);
console.log(fibonacciSeries);
