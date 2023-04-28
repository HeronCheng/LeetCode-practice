// 2652. Sum Multiples
// Easy
/*
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
*/

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            sum += i;
            continue;
        }
        else if (i % 5 === 0) {
            sum += i;
            continue;
        }
        else if (i % 7 === 0) {
            sum += i;
            continue;
        }
    }
    return sum;
};
