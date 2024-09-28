
const numButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator')
const equalsButton = document.querySelector('.button.equals')
/*-------------------------------- Variables --------------------------------*/
 let currentInput = '';

/*----------------------------- Event Listeners -----------------------------*/
// Handle number buttons
numButtons.forEach(numButton => {
  numButton.addEventListener('click', (Event) => {
    currentInput += Event.target.innerHTML;  // Append the clicked number
    document.querySelector('.display').textContent = currentInput;  // Update the display
  });
});

// Handle operator buttons
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (Event) => {
    if (Event.target.innerHTML === 'C') {
      currentInput = '';  // Reset current input
      document.querySelector('.display').textContent = currentInput;  // Clear the display
      return;
    }
    currentInput += Event.target.innerHTML;  // Append the operator
    document.querySelector('.display').textContent = currentInput;  // Update the display
  });
});

// equalsButton//
  equalsButton.addEventListener('click', () =>{
  
      try {
        currentInput = eval(currentInput);  // Evaluate the current input
        document.querySelector('.display').textContent = currentInput;  // Update the display with the result
      } catch {
        document.querySelector('.display').textContent = 'Error';  // Handle invalid inputs
      }
    });
