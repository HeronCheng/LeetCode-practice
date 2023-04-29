// 1389. Create Target Array in the Given Order
// Easy
/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.
*/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    if (nums.length === 1) return nums;
    let target = index[1] === 0 ? [nums[1], nums[0]] : [nums[0], nums[1]];
    for (let i = 2; i < index.length; i++) {
        let leftPart = target.slice(0, index[i]);
        let rigjtPart = target.slice(index[i]);
        leftPart.push(nums[i]);
        target = leftPart.concat(rigjtPart);
    }
    return target;
};
