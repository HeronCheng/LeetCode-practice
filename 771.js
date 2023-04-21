// 771. Jewels and Stones
// Easy

/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const arr = jewels.split('');
    let count = 0;
    [...stones].forEach(item => {
        const found = arr.find(ele => ele === item);
        if (found !== undefined) count++
    })
    return count;
};
