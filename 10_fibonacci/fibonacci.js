const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    if (n == 0) {
        return n;
    }
    let num1 = 0;
    let num2 = 1;
    for (let i = 1; i < n; i++) {
        let pivot = num2;
        num2 += num1;
        num1 = pivot;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
