const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
};

const multiply = function (arr) {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    num = num * arr[i];
  }
  return num;
};

const power = function (num1, num2) {
  let pow = 1;
  for (let i = 0; i < num2; i++) {
    pow *= num1;
  }
  return pow;
};

const factorial = function (num) {
  let fact = 1;
  if (num === 0) {
    return fact;
  }

  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
