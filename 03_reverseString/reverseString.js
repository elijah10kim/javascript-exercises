const reverseString = function(string) {
    let reversedString = "";
    const arrayChars = string.split("").reverse();
    for (const char of arrayChars) {
        reversedString += char;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
