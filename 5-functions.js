console.log("Task 5");
// Function declaration
function add(a, b) {
	return a + b;
  }
  
  // Function expression
  const square = function (num) {
	return num * num;
  };
  
  // Arrow function
  const greet = (name) => `Hello, ${name}!`;
  
  // Calling functions
  console.log(add(4, 5));       // 9
  console.log(square(6));       // 36
  console.log(greet("Astha"));  // Hello, Astha!