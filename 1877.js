// 1877. Minimize Maximum Pair Sum in Array
// Medium

/*
The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

Each element of nums is in exactly one pair, and
The maximum pair sum is minimized.
Return the minimized maximum pair sum after optimally pairing up the elements.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    const newArr = [];
    let [startIndex, endIndex] = [0, nums.length-1];
    while(startIndex < nums.length/2) {
        newArr.push(nums[startIndex] + nums[endIndex]);
        startIndex+=1;
        endIndex-=1;
    }
    return newArr.sort((a, b) => b - a)[0];
};
