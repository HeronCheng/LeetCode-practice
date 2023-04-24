// 1512. Number of Good Pairs
// Easy
/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let i = 0;
    let j = 1;
    const output = [];
    while (i < nums.length - 1) {
        if (nums[i] == nums[j]) output.push([i, j]);
        if (j === nums.length -1) {
            i++;
            j = i + 1;
        }
        else j++;
    };
    return output.length;
};

// Runtime 51 ms
// Memory 42.7 MB
