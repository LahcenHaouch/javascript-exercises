const fibonacci = function(numP) {
  const num = Number.parseInt(numP, 10);

  if (Number.isNaN(num) || num < 0) {
    return 'OOPS';
  }

  const fibs = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      fibs.push(1);
    } else {
      fibs.push(fibs.at(-1) + fibs.at(-2));
    }
  }

  return fibs.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
