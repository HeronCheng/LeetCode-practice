// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// easy

/*
You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.
*/

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let numString = num.toString();
    let minSum = Number(numString.slice(0, 2)) + Number(numString.slice(2, 4)); // 初始值
    // 數字 1 + 3 的情形
    for(let i = 0; i < numString.length; i++) {
        let num1 = Number(numString[i]);
        let num2 = i === 0 ? Number(numString.slice(i + 1, numString.length)) : Number(numString.slice(0, i) + numString.slice(i + 1, numString.length));
        minSum = minSum < num1 + num2 ? minSum : num1 + num2;
    }

    // 數字 2 + 2 的情形 (這邊有點是用暴力解處理)
    let currNum;
    currNum = Number(numString[0] > numString[1] ? numString[1]+numString[0] : numString[0]+numString[1]) + Number(numString[2] > numString[31] ? numString[3]+numString[2] : numString[2]+numString[3]);
    minSum = minSum < currNum ? minSum : currNum;
    currNum = Number(numString[0] > numString[2] ? numString[2]+numString[0] : numString[0]+numString[2]) + Number(numString[1] > numString[3] ? numString[3]+numString[1] : numString[1]+numString[3]);
    minSum = minSum < currNum ? minSum : currNum;
    currNum = Number(numString[0] > numString[3] ? numString[3]+numString[0] : numString[0]+numString[3]) + Number(numString[1] > numString[2] ? numString[2]+numString[1] : numString[1]+numString[2]);
    minSum = minSum < currNum ? minSum : currNum;

    return minSum;
};
