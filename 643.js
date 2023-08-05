// 643. Maximum Average Subarray I
// easy
/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let average = 0;
    sum = (nums.slice(0, k).reduce((acc, curr) => acc + curr, 0));
    average = sum / k
    if (nums.length === k) return average;
    let [L, R] = [0, k - 1];
    while (R < nums.length - 1) {
        sum = sum - nums[L] + nums[R + 1];
        average = average > (sum / k) ? average : (sum / k);
        L++;
        R++;
    }
    return average;
};
