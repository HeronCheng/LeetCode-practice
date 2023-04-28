// 1480. Running Sum of 1d Array
// Easy
/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let originNum = 0;
    return nums.map(val => {
        return originNum+=val;
    })
};
