function startCalculator() {
	let num1 = parseFloat(prompt("Enter the first number:"));
	let num2 = parseFloat(prompt("Enter the second number:"));
	let operator = prompt("Choose operation: +, -, *, /");
  
	// Input Validation
	if (isNaN(num1) || isNaN(num2)) {
	  alert("⚠ Please enter valid numbers.");
	  return;
	}
  
	let result;
  
	switch (operator) {
	  case "+":
		result = num1 + num2;
		break;
	  case "-":
		result = num1 - num2;
		break;
	  case "*":
		result = num1 * num2;
		break;
	  case "/":
		if (num2 === 0) {
		  alert("Cannot divide by zero!");
		  return;
		}
		result = num1 / num2;
		break;
	  default:
		alert("Invalid operator. Please use +, -, *, or /.");
		return;
	}
  
	alert(`Result of ${num1} ${operator} ${num2} = ${result}`);
  }