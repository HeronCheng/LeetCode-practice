// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let [product, sum] = [1, 0];
    for (const num of n.toString()) {
        product = product * Number(num);
        sum = sum + Number(num);
    }
    return product - sum;
};
