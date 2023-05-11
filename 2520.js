// 2520. Count the Digits That Divide a Number
// Easy
/*
Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.
*/

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const arr = [...num.toString()];
    return arr.filter(val => num % Number(val) === 0).length;
};
