// 523. Continuous Subarray Sum
// Medium
/*
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length === 1) return false;
    const set = new Set();
    let sum = 0, remain = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum %= k;

        if (set.has(sum)) return true;

        set.add(remain);
        remain = sum;
    }
    return false;
};

// 根據通過率跟體感確實有比較難，自己寫會 TLE ，需要參考其他人的解法，最近寫了幾題之後發現很多題目還是需要用到 set & map 速度才會比較快
