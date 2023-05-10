// 1342. Number of Steps to Reduce a Number to Zero
// Easy
/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let output = 0;
    let input = num;
    while (input > 0) {
        if (input % 2 === 0) input = input / 2;
        else input--;
        output++;
    }
    return output
};
