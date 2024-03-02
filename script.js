// This function recalculates the split amount whenever called
function calculateSplitAmount() {
    // Parse the bill amount or default to 0 if empty
    const billAmount = parseFloat(billAmountInput.value) || 0;
    
    // Parse the number of people to split the bill with, defaulting to 1 to avoid division by zero
    const peopleCount = parseInt(peopleCountInput.value) || 1;
    
    // Calculate the amount per person
    const amountPerPerson = (billAmount / peopleCount).toFixed(2); // Rounds to two decimal places
    
    // Update the amount per person on the page
    amountPerPersonOutput.value = `$ ${amountPerPerson}`;
  }
  
  // Get references to the elements
  const billAmountInput = document.getElementById('billAmount');
  const peopleCountInput = document.getElementById('peopleCount');
  const amountPerPersonOutput = document.getElementById('amountPerPerson');
  
  // Set up event listeners to recalculate whenever any input changes
  billAmountInput.addEventListener('input', calculateSplitAmount);
  peopleCountInput.addEventListener('input', calculateSplitAmount);
  
  // Run the calculation on initial page load
  calculateSplitAmount();
  