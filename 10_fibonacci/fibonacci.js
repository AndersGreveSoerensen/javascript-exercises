const fibonacci = function(index) {
    if (typeof(index) == "string") {
        index = parseInt(index)
    }
    if (index < 0) return "OOPS"
    else {
        a = 0
        b = 1
        i = 1
        let fiboNumber = 1
        while (i < index) {
            fiboNumber = a + b
            a = b
            b = fiboNumber
            i++
        }
        return fiboNumber
    }
};

// Do not edit below this line
module.exports = fibonacci;
