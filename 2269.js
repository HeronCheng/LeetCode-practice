// 2269. Find the K-Beauty of a Number
// Easy
/*
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.
*/

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const stringNum = num.toString();
    let position = 0;
    let result = 0;
    while(position + k < stringNum.length + 1) {
        let divisor = Number(stringNum.slice(position, position + k));
        if (divisor !== 0 && num % divisor === 0) {
            result++;
        }
        position ++;
    }
    return result;
};
