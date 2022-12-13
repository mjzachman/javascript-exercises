const getTheTitles = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].title);
    console.log(newArr);
  }

  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
