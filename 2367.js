// 2367. Number of Arithmetic Triplets
// Easy
/*
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.
*/

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let output = 0;
    for (const item of nums) {
        const middleNum =  nums.find(ele => ele === item + diff)
        if(middleNum === undefined) continue
        else {
            const endNum = nums.find(ele => ele === middleNum + diff)
            if(endNum === undefined) continue
            else {
                output++
            }
        }
    }
    return output;
};
