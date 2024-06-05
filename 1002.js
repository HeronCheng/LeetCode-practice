// 1002. Find Common Characters
// easy
/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const output = [];
    const modalWord = words.pop();
    let position = 0, arrIndex = 0;
    while (position < modalWord.length && arrIndex < words.length) {
        if (!words[arrIndex].includes(modalWord[position])){
            position++;
            arrIndex = 0;
            continue;
        }
        const findIndex = words[arrIndex].indexOf(modalWord[position]);
        words[arrIndex] = words[arrIndex].substring(0, findIndex) + words[arrIndex].substring(findIndex + 1, words[arrIndex].length);
        if (arrIndex === words.length - 1) {
            output.push(modalWord[position]);
            position++;
            arrIndex = 0;
        }
        else arrIndex++;
    }
    return output;
};
