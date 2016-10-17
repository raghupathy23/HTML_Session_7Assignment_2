var findSum = function () {
  var total = 0;
	// If arguments is less than 1
	if(arguments.length < 1) {
		console.log("Please enter atleast 2 arguments");
	}
	// If arguments is equal than 1
	if(arguments.length == 1) {
		console.log("Please enter more than 1 arguments");
	}
	// Using for loop, add the arguments
    for (var i = 0; i < arguments.length; i++) {
        total += parseInt(arguments[i]);		
    }
    console.log("Sum of Digits : "+total);
	return total;
	
}
findSum(1,2,3);
findSum(1,2,3,4,5,6,7,8,9,10);
