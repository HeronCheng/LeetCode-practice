// 2240. Number of Ways to Buy Pens and Pencils
// Medium
/*
You are given an integer total indicating the amount of money you have. You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can spend part or all of your money to buy multiple quantities (or none) of each kind of writing utensil.

Return the number of distinct ways you can buy some number of pens and pencils.
*/

/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let pen = 0;
    let output = 0;
    while (pen * cost1 <= total) {
        // ~~ 可以取得除法的商數
        const pencil = ~~((total - pen * cost1) / cost2);
        output = output + pencil + 1;
        pen++
    }
    return output;
};
