function findGrade(marks) {
  if (marks >= 90 && marks <= 100) {
      return "A grade";
  } else if (marks >= 80 && marks < 90) {
      return "B grade";
  } else if (marks >= 70 && marks < 80) {
      return "C grade";
  } else {
      return "No grade";
  }
}

// Example usage:
let marks = 85;  // You can change this value to test with different marks
let grade = findGrade(marks);
console.log("The grade is: " + grade);
