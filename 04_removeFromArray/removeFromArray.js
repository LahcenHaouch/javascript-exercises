const removeFromArray = function (arr, ...args) {
  return arr.filter((element) => !args.some((el) => el === element));
};

// Do not edit below this line
module.exports = removeFromArray;
