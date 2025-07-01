console.log("Task 3 done");// Task 3: User Greeting using conditionals

let userName = prompt("What's your name?");
let age = prompt("How old are you?");
age = parseInt(age);

if (age < 18) {
  alert(`Hey ${userName}, you're a teen!`);
} else if (age <= 60) {
  alert(`Welcome ${userName}, you're an adult!`);
} else {
  alert(`Hello ${userName}, you're a senior citizen!`);
}