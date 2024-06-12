// 75. Sort Colors
// Medium
/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count0 = 0;
    let count2 = 0;
    let index = 0;
    while (nums.length > 0) {
        if (nums[index] === undefined) break;
        if (nums[index] === 0) {
        	nums.splice(index, 1);
        	count0++;
        }
        else if (nums[index] === 2) {
        	nums.splice(index, 1);
        	count2++;
        }
        else index++;
    }
    if (count0 > 0) {
    	for(let i = 0; i < count0; i++) {
      	nums.unshift(0);
      }
    }
    if (count2 > 0) {
    	for(let i = 0; i < count2; i++) {
      	nums.push(2);
      }
    }
};
