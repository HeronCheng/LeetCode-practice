// 11. Container With Most Water
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let amount = 0;
    let [i, j] = [0, height.length - 1];
    while (i !== j) {
        let currentAmount = height[i] > height[j] ? height[j] * (j - i) :  height[i] * (j - i);
        amount = amount > currentAmount ? amount : currentAmount;
        if (height[i] > height[j]) j--;
        else i++;
    }
    return amount;
};
