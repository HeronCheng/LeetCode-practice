// 283. Move Zeroes
// easy
// Tag: leetcode 75

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.includes(0)) {
        let zeroCount = nums.filter(val => val === 0).length;
        while (zeroCount > 0) {
            const targetIndex = nums.findIndex((ele) => ele === 0);
            nums.splice(targetIndex, 1);
            nums.push(0)
            zeroCount--;
        }
    } 
};
