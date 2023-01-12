const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z]/g, '');
    let reverseString = [...newString].reverse().join('');
    return newString === reverseString;
  };

// Do not edit below this line
module.exports = palindromes;
