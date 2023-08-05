// 1207. Unique Number of Occurrences
// easy
/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let numMap = new Map();
    arr.forEach (val => {
        if (numMap.has(val)) {
            let curr = numMap.get(val);
            numMap.set(val, curr + 1);
        }
        else numMap.set(val, 1);
    })
    const occurrences = [];
    for (let value of numMap.values()) {
        occurrences.push(value)
    }
    const newSet = new Set([...occurrences]);
    return newSet.size === numMap.size;
};
