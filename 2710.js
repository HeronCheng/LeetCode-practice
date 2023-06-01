// 2710. Remove Trailing Zeros From a String
// easy
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

 /**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let output = num;
    while (output.at(-1) === "0") {
        output = output.slice(0, output.length - 1);
    }
    return output;
};
