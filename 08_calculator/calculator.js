const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arrayNumbers) {
	return arrayNumbers.reduce((total, current) => total + current, 0);
};

const multiply = function(arrayNumbers) {
  if (arrayNumbers.length === 0){
    return arrayNumbers.length;
  }
  return arrayNumbers.reduce((product, current) => product * current, 1)
};

const power = function(a,b) {
   return Math.pow(a,b);
};

const factorial = function(n) {
	if (n === 0){
    return 1;
  }
  return n * factorial(n-1);
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
