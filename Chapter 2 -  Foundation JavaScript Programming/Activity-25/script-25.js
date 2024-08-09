// Function to add a click event listener to a button
function addClickListener(buttonId, callback) {
  const button = document.getElementById(buttonId);
  if (button) {
      button.addEventListener('click', callback);
  } else {
      console.error('Button with id ' + buttonId + ' not found.');
  }
}

// Callback function to be executed when the button is clicked
function handleButtonClick() {
  alert('Button was clicked!');
}

// Add click event listener to the button with id 'myButton'
addClickListener('myButton', handleButtonClick);
