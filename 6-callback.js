console.log("task-6");


function processNumber(num, callback) {
	callback(num);
}
  
  processNumber(5, function (n) {
	console.log("Double is", n * 2); // Double is 10
  });