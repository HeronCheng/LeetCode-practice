// 2215. Find the Difference of Two Arrays
// easy
/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const output = [[], []];
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    nums1.forEach(item => {
        if (!set2.has(item) && !output[0].includes(item)) output[0].push(item);
    })
    nums2.forEach(item => {
        if (!set1.has(item) && !output[1].includes(item)) output[1].push(item);
    })
    return output;
};
