const findTheOldest = function(array) {
    array.sort((a, b) => {
        let lastGuyAge = 0
        let nextGuyAge = 0
        
        if (a.yearOfDeath == undefined) {
            lastGuyAge = ((new Date()).getFullYear()) - a.yearOfBirth
        }
        else {
            lastGuyAge = a.yearOfDeath - a.yearOfBirth
        }

        if (b.yearOfDeath == undefined) {
            nextGuyAge = ((new Date()).getFullYear()) - b.yearOfBirth
        }
        else {
            nextGuyAge = b.yearOfDeath - b.yearOfBirth
        }
        return lastGuyAge > nextGuyAge ? -1 : 1
    }) 
    return array[0]
}

// Do not edit below this line
module.exports = findTheOldest;
