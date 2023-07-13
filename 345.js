// 345. Reverse Vowels of a String
// EASY
/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelArr = [];
    for (const letter of s) {
        if (vowels.includes(letter)) vowelArr.push(letter);
    }
    vowelArr.reverse();
    let newString = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            newString += vowelArr[0];
            vowelArr = vowelArr.slice(1, vowelArr.length);
        }
        else newString += s[i];
    }
    return newString;
};
