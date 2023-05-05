// 1876. Substrings of Size Three with Distinct Characters
// Easy

/*
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.
*/

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let i = 0;
    let output = 0;
    while (i <= ((s.length) - 3)) {
        let subString = s.slice(i, i + 3);
        if (subString[0] !== subString[1] && subString[0] !== subString[2] && subString[1] !== subString[2]) output++;
        i++;
    }
    return output;
};
