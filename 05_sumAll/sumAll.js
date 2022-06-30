const sumAll = function (num1, num2) {
	// Invalid arguments checking
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		return "ERROR";
	}
	if (num1 < 0 || num2 < 0) {
		return "ERROR";
	}

	// Variables for storing the min number of the two, the maximum number and the sum aff all the numbers between both numbers
	let sum = 0;
	let min = 0;
	let max = 0;
	if (num1 < num2) {
		min = num1;
		max = num2;
	} else {
		min = num2;
		max = num1;
	}

	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
