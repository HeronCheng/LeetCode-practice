// 804. Unique Morse Code Words
// easy

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if (words.length === 1) return 1;
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const outputSet = new Set();
    const getAz = () => [...Array(26)].map((a,i) => String.fromCharCode(i+97))
    words.forEach((item) => {
        let ans = "";
        for (const ele of item) {
            const index = getAz().findIndex(val => val === ele);
            ans += morseCode[index];
        }
        outputSet.add(ans);
    })
    return outputSet.size;
};
