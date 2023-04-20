// 1470. Shuffle the Array
// Easy
/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// 寫法1
var shuffle = function(nums, n) {
    const arr1 = nums.slice(0, nums.length/2);
    const arr2 = nums.slice(nums.length/2, nums.length);
    const output = [];
    for (let i = 0; i < arr1.length; i++) {
        output.push(arr1[i]);
        output.push(arr2[i]);
    }
    return output;
};
// 寫法2
var shuffle = function(nums, n) {
    const output = [];
    for (let i = 0; i < n; i++) {
        output.push(nums[i]);
        output.push(nums[i+n]);
    }
    return output;
};
