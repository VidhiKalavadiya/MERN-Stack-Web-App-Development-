function generatePrimes(n) {
  if (n <= 0) return [];  // Return an empty array if n is less than or equal to 0

  const primes = [];
  let number = 2;  // Start checking for prime numbers from 2

  while (primes.length < n) {
      if (isPrime(number)) {
          primes.push(number);
      }
      number++;
  }

  return primes;
}

function isPrime(num) {
  if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true;   // 2 and 3 are prime numbers
  
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Example usage:
const n = 10;  // You can change this value to generate a different number of primes
const primeNumbers = generatePrimes(n);
console.log("First " + n + " prime numbers: " + primeNumbers);
