const fibonacci = function (index) {
  if (index < 0) {
    return "OOPS";
  }
  if (typeof index === "string") {
    index = Number(index);
  }

  let lastTwo = [0, 1];
  let fibSum = 0;

  for (let i = 0; i < index; i++) {
    fibSum = lastTwo[0] + lastTwo[1];
    lastTwo.pop();
    lastTwo.unshift(fibSum);
  }

  return fibSum;
};

// Do not edit below this line
module.exports = fibonacci;
