// 167. Two Sum II - Input Array Is Sorted

// Medium

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let memmory = {};
    for(let i = 0; i < numbers.length; i++){
        let currNum = numbers[i];
        let diff = target - currNum;
        if(diff in memmory){
            return [ memmory[diff]+1, i+1];
        }
        else {
            memmory[currNum] = i;
        }
    }
};
