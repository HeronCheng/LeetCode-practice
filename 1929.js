// 1929. Concatenation of Array
// Easy

/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const newArr = [...nums];
    for (const item of nums) {
        newArr.push(item);
    }
    return newArr;
};

// Runtime 80 ms
// Memory 46 MB
