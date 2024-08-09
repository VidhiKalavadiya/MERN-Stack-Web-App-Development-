// Function to compare two strings using a Promise
function compareStrings(string1, string2) {
  return new Promise((resolve, reject) => {
      if (string1 === string2) {
          resolve('The strings are equal.');
      } else {
          reject('The strings are not equal.');
      }
  });
}

// Function to handle button click
function handleButtonClick() {
  const str1 = document.getElementById('string1').value;
  const str2 = document.getElementById('string2').value;
  const resultElement = document.getElementById('result');

  compareStrings(str1, str2)
      .then(message => {
          resultElement.textContent = message;
          resultElement.style.color = 'green';
      })
      .catch(error => {
          resultElement.textContent = error;
          resultElement.style.color = 'red';
      });
}

// Add click event listener to the button
document.getElementById('checkButton').addEventListener('click', handleButtonClick);
