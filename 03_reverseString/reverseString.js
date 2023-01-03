function reverseString(string) {
    let stringReversed = ''

    for (i = 0; i < string.length; i++) {
        stringReversed += string[string.length - i - 1]
    }
    
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
