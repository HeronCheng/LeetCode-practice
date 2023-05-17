// 1323. Maximum 69 Number
// Easy
/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    if (num === 9 || num === 99 || num === 999) return num;
    let newOne = num;
    const stringNum = num.toString();
    for (let i = 0; i < num.toString().length; i++) {
        if (stringNum[i] === "6") {
            newOne = Math.max(Number(stringNum.slice(0,i) + "9" + stringNum.slice(i+1,stringNum.length)), newOne);
        }
    }
    return newOne;
};
