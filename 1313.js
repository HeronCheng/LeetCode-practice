// 1313. Decompress Run-Length Encoded List
// Easy

/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let output = [];
    let position = 0;
    while (position < nums.length - 1) {
        let newArr = new Array(nums[position]);
        newArr.fill(nums[position + 1]);
        output = output.concat(newArr);
        position = position + 2;
    }
    return output;
};
