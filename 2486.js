// Append Characters to String to Make Subsequence
// Medium

/*
You are given two strings s and t consisting of only lowercase English letters.

Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let position = 0;
    let count = 0;
    while (position < t.length) {
        if (s.includes(t[position])) {
            count++;
            const sPosition = s.indexOf(t[position]);
            s = s.slice(sPosition + 1);
        }
        else break;
        position++;
    }
    return t.length - count;
};
