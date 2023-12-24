// 1758. Minimum Changes To Make Alternating Binary String
// easy 
/*
You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.
*/

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    if (!s.includes('0') | !s.includes('1')) {
        if (s.length % 2 === 0) return s.length / 2;
        else return Math.floor(s.length / 2);
    };
    oddList = [];
    evenList = [];
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) evenList.push(s[i]);
        else oddList.push(s[i]);
    }
    const oddZero = oddList.filter(val => val === '0').length;
    const oddOne = oddList.filter(val => val === '1').length;
    const evenZero = evenList.filter(val => val === '0').length;
    const evenOne = evenList.filter(val => val === '1').length;
    const resultA = oddOne + evenZero;
    const resultB = oddZero + evenOne;
    return resultA > resultB ? resultB : resultA;
};
