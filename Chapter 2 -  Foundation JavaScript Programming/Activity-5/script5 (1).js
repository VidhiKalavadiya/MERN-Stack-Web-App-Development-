for (let i = 1; i <= 10; i++) {
  // If the number is odd, skip the rest of the loop and continue with the next iteration
  if (i % 2 !== 0) {
      continue;
  }
  console.log(i);  // This will only print even numbers
}