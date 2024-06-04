// 409. Longest Palindrome
// easy
/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1;
    let numMap = new Map();
    s.split('').forEach(val => {
        if (numMap.has(val)) {
            numMap.set(val, numMap.get(val) + 1);
        } else {
            numMap.set(val, 1);
        }
    })
    let count = 0;
    let hasSingle = false;
    for (let value of numMap.values()) {
        if (value % 2 === 0) count += value;
        else {
            hasSingle = true;
            count += (value - 1);
        }
    }
    return hasSingle ? count + 1 : count;
};
