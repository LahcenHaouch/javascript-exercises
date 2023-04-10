const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((acc, current) => acc + current, 0);

const multiply = (arr) => arr.reduce((acc, current) => acc * current, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = function(a) {
  if (a === 1 || a === 0) {
    return 1;
  }
  return a * factorial(a - 1);
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
