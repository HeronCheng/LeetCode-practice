// 2357. Make Array Zero by Subtracting Equal Amounts
// easy
/*
You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumOperations = function(nums) {
    let output = 0;
    let maxNum = Math.max(...nums);
    nums = nums.filter(ele => ele > 0);
    let minNum = Math.min(...nums);
    while (maxNum > 0) {
        nums = nums.map(val => {
            val = val - minNum >= 0 ? val - minNum : 0;
            return val;
        })
        output++;
        maxNum = Math.max(...nums);
        nums = nums.filter(ele => ele > 0);
        minNum = Math.min(...nums);
    }
    return output;
};
