// 2535. Difference Between Element Sum and Digit Sum of an Array
// Easy
/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let [elementSum, digitSum] = [0, 0];
    nums.forEach(val => {
        elementSum += val;
        for (const ele of val.toString()) {
            digitSum += Number(ele);
        }
    })
    return elementSum - digitSum;
};
