// 397. Integer Replacement
// Medium
/*
Given a positive integer n, you can apply one of the following operations:

If n is even, replace n with n / 2.
If n is odd, replace n with either n + 1 or n - 1.
Return the minimum number of operations needed for n to become 1.
*/

/**
 * @param {number} n
 * @return {number}
 */
let count = 0;
var integerReplacement = function(n) {
    if (n === 1)  {
        let result = count;
        count = 0;
        return result;
    }
    count++;
    if (n % 2 === 0) return integerReplacement(n / 2);
    else {
    	let guessNum = (n - 1) / 2;
        if ((guessNum % 2 === 0) || guessNum === 1) return integerReplacement(n - 1);
    	return integerReplacement(n + 1);
    }
};
