const repeatString = function(string, num) {
    let stringTotal = ""

    for (i = 0; i<num; i++) {
        stringTotal += string
    }
    
    if (num >= 0) {
        return stringTotal
    }
    else {
        return "ERROR"
    }
};

// repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;

