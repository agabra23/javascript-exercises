const convertToCelsius = function() {     // (x-32) * (5/9)
  let farenheit = arguments[0];
  let result = 0;
  result = (farenheit-32) * (5/9);
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function() {      // x * (9/5) + 32
  let celsius = arguments[0];
  let result = celsius * (9/5) + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
