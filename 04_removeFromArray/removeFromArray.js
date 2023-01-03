const removeFromArray = function(array, ...args ) {

    if (args) {
        for (argument of args) {
            if (array.includes(argument)) {
                index = array.indexOf(argument)
                array.splice(index, 1)
            }
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
