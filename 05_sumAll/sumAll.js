const sumAll = function(num1, num2) {
    let largeNum;
    let smallNum;
    let sum = 0;
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    } else if (num1 < 0 || num2 < 0){
        return "ERROR"
    }
    if (num1 < num2) {
        largeNum = num2;
        smallNum = num1;
    } else {
        largeNum = num1;
        smallNum = num2;
    }
    for (let i = smallNum; i <= largeNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
