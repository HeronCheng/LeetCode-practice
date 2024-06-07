// 648. Replace Words
// Medium
/*
In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.
*/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const sentenceArr = sentence.split(' ');
    sentenceArr.forEach((word, index) => {
        const target = dictionary
            .filter(val => word.includes(val) && word.startsWith(val))
            .sort((a, b) => a.length - b.length);
        if (target[0]) sentenceArr[index] = target[0];
    })
    return sentenceArr.join(' ');
};
