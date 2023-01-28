const sumAll = function (firstNum, secondNum) {
  if (
    typeof firstNum !== "number" ||
    typeof secondNum !== "number" ||
    firstNum < 0 ||
    secondNum < 0
  ) {
    return "ERROR";
  }

  let initialValue = firstNum > secondNum ? secondNum : firstNum;
  let limit = firstNum > secondNum ? firstNum : secondNum;
  let sum = 0;
  for (let i = initialValue; i <= limit; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
