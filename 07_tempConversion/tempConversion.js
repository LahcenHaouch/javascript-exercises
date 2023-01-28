const roundFloat = (num) => {
  const newNum = Number.parseFloat(num.toFixed(2));
  return Math.round(newNum * 10) / 10;
};

const convertToCelsius = function (temp) {
  return roundFloat(((temp - 32) * 5) / 9);
};

const convertToFahrenheit = function (temp) {
  return roundFloat((temp * 9) / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
