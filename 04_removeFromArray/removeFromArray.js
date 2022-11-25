const removeFromArray = function(array, ...moreArgs) {
    outer: for (const arg of moreArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg) {
                array.splice(i,1);
                continue outer;
            }
        }
    } return array;
};

// Do not edit below this line
module.exports = removeFromArray;
