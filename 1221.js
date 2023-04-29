// 1221. Split a String in Balanced Strings
// Easy

/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.
*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let answer = 0;
    let r = 0;
    let l = 2;
    while (l <= s.length) {
        string = s.slice(r, l);
        lCount = (string.match(/L/g) || []).length;
        rCount = string.length - lCount;
        if (lCount === rCount) {
            answer++;
            r = l;
            l = r + 2;
        }
        else l++
    }
    return answer;
};
