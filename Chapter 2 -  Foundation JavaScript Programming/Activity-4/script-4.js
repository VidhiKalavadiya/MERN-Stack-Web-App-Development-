function findGrade(marks) {
  let gradeRange = Math.floor(marks / 10);

  switch (gradeRange) {
    case 10:
    case 9:
      return "A grade";
    case 8:
      return "B grade";
    case 7:
      return "C grade";
    default:
      return "No grade";
  }
}

// Example usage:
let marks = 85; // You can change this value to test with different marks
let grade = findGrade(marks);
console.log("The grade is: " + grade);
