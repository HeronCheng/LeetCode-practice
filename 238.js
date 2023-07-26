// 238. Product of Array Except Self
// Medium
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const isContainZero = nums.filter(val => val === 0);
    if (isContainZero.length >= 1) {
        if (isContainZero.length === 1) {
            let product = 1;
            nums.forEach(val => {
                if (val !== 0) product*=val
            });
            return nums.map((item) => {
                if (item === 0) return product;
                else return 0;
            });
        }
        else return nums.map(() => 0);
    }
    else {
        let product = 1;
        nums.forEach(val => product*=val);
        return nums.map((item) => product/ item);
    }
};
