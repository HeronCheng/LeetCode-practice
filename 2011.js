// 2011. Final Value of Variable After Performing Operations
// Easy
/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const add = operations.filter(val => val.includes("+")).length;
    const minus = operations.length - add;
    return 0 + add - minus;
};
