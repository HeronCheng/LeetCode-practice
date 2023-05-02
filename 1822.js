// 1822. Sign of the Product of an Array
// Easy
/*
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const multiple = nums.reduce((acc, curr) => curr === 0 ? 0 : acc*curr);
    return multiple >= 0 ?  (multiple > 0 ? 1 : 0) : -1;
};
