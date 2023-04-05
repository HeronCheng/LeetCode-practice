// 9. Palindrome Number
// Easy
/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    else {
        let origin = x.toString();
        let array = origin.split("").join();
        let reverseArr = origin.split("").reverse().join();
        if (array === reverseArr) return true;
        else return false;
    }
};
