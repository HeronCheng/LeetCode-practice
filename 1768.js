// 1768. Merge Strings Alternately
// Easy
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const longer = word1.length > word2.length ? word1 : word2;
    const shorter = word1.length < word2.length ? word1 : word2;
    let newArr = [];
    for (let i = 0; i < shorter.length; i++) {
        newArr.push(word1[i],word2[i]);
    }
    newArr.push(longer.slice(shorter.length, longer.length));
    return newArr.join("");
};
