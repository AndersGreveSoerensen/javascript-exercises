const palindromes = function (string) {
    let lowerCase = string.toLowerCase()
    let onlyLetters = lowerCase.replace(/[^a-z]/g, "")
    stringReversed = onlyLetters.split("").reverse().join("")
    return onlyLetters === stringReversed ? true : false
};

console.log(palindromes('A car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;
