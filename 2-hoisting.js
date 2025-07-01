// Task 2: Hoisting Demo (Easy version)
console.log("Task 2")

// Using var
console.log("Value of a before declaring:", a); // undefined
var a = 5;
console.log("Value of a after declaring:", a); // 5

// Using let
// This will give error if we try before declaration
// console.log("Value of b before declaring:", b); // ❌ Error
let b = 10;//Reference error
console.log("Value of b after declaring:", b); // 10

/*
Notes:
- var is hoisted: You can use it before declaring, but it will be undefined.
- let is not like var: You CANNOT use it before declaring, or it gives an error.
*/