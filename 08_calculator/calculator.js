const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	let arr = arguments[0];
  return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function() {
  let arr = arguments[0];
  return arr.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function() {
	let arr = arguments[0];
  return arguments[0] ** arguments[1];
};

const factorial = function() {
	let num = arguments[0];

  if (num === 0) {
    return 1;
  }else if(num < 0) {
    return -1;
  } else {
    return (num * factorial(num-1));
  }
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
