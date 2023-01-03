function round(numberToRound, amountOfDigits) {
  let roundedNumber = Math.round(numberToRound * 10**amountOfDigits)/(10**amountOfDigits)
  return roundedNumber
}

const convertToCelsius = function(tempInFahrenheit) {
  let convertedTemp = (tempInFahrenheit - 32) * (5/9)
  let roundedTemp = round(convertedTemp, 1)
  return roundedTemp
};

const convertToFahrenheit = function(tempInCelcius) {
  let convertedTemp = tempInCelcius * (9/5) + 32
  let roundedTemp = round(convertedTemp, 1)
  return roundedTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
