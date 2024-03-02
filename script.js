// Get references to the input elements and the output field
const billAmountInput = document.getElementById('billAmount');
const peopleCountInput = document.getElementById('peopleCount');
const tipSlider = document.getElementById('tipSlider'); // Assuming you have an input for tip with this id
const amountPerPersonOutput = document.getElementById('amountPerPerson');

// Function to calculate the split amount
function calculateSplitAmount() {
  const billAmount = parseFloat(billAmountInput.value) || 0;
  const peopleCount = parseInt(peopleCountInput.value) || 1; // Avoid division by zero
  const tipPercent = parseFloat(tipSlider.value) || 0;
  
  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;
  const amountPerPerson = (totalAmount / peopleCount).toFixed(2); // Rounds to two decimal places

  amountPerPersonOutput.value = `$ ${amountPerPerson}`;
}

// Event listeners for the input changes
billAmountInput.addEventListener('input', calculateSplitAmount);
peopleCountInput.addEventListener('input', calculateSplitAmount);
tipSlider.addEventListener('input', calculateSplitAmount);

// Initialize with default values
document.addEventListener('DOMContentLoaded', calculateSplitAmount);
