// 1071. Greatest Common Divisor of Strings
// easy
/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1[0] !== str2[0]) return "";
    let output = "";
    let position = 0;
    const mainString = str1.length > str2.length ? str1 : str2;
    const subString = mainString === str1 ? str2 : str1;
    let outputArr = [];
    while (output.length <= subString.length && position < subString.length) {
        output+=subString[position];
        function isInteger(n) {
            return n === +n && n === (n|0);
        }
        if (mainString.includes(output)) {
            let multiple = mainString.length / output.length;
            if (isInteger(multiple) && output.repeat(multiple) === mainString) {
                multiple = subString.length / output.length;
                if (isInteger(multiple) && output.repeat(multiple) === subString) outputArr.push(output);
            }
        }
        position++;
    }
    if (outputArr.length === 0) return "";
    else return outputArr.at(-1);
};
