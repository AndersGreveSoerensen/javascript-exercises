const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let sum = 0
  for (let arg of array) {
    sum += arg
  }
  return sum
};


const multiply = function(array) {
  finalNumber = 1
  for (let arg of array) {
    finalNumber *= arg
  }
  return finalNumber
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
	let finalNumber = 1
  for (i = 2; i <= a; i++) {
    finalNumber *= i
  }
  return finalNumber
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
