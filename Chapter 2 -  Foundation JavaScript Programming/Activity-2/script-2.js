function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("Not eligible to vote.");
  }
}

// Example usage:
let age = 16; // You can change this value to test with different ages
checkVotingEligibility(age);
