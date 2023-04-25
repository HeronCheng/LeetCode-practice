// 2574. Left and Right Sum Differences
// Easy
/*
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    if (nums.length === 1) return [0];
    else {
        const leftSum = [0];
        const rightSum = [0];
        let count = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            leftSum.push(count += nums[i]);
        }
        count = 0;
        for(let i = nums.length - 1; i > 0; i--) {
            rightSum.push(count += nums[i]);
        }
        rightSum.reverse();
        return leftSum.map((val, index) => Math.abs(val - rightSum[index]));
    }
};
