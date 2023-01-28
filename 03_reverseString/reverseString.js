const reverseString = function (str) {
  // const arr = str.split("");
  // let result = "";
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   result += arr[i];
  // }

  // return result;
  return str
    .split("")
    .map((_, index) => str[str.length - index - 1])
    .join("");
};

// Do not edit below this line
module.exports = reverseString;
