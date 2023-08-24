// 136. Single Number
// easy

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {};
    nums.forEach((val) => {
        if (obj[val]) obj[val] = obj[val] + 1;
        else obj[val] = 1;
    })
    for (const item in obj) {
        if (obj[item] === 1) return item;
    }
};
