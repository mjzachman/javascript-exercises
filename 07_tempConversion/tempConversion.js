const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32)*(5/9);
  cTemp = Math.round(cTemp * 10)/10;
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * (9/5)) + 32;
  console.log(fTemp);
  fTemp = Math.round(fTemp * 10)/10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


console.log(convertToFahrenheit(73.2));