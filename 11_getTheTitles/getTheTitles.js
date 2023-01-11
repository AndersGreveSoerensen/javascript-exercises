const getTheTitles = function(array) {
    bookTitleArray = []
    array.forEach(element => bookTitleArray.push(element.title));
    return bookTitleArray
};

// Do not edit below this line
module.exports = getTheTitles;
