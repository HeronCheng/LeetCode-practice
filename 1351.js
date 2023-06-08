// 1351. Count Negative Numbers in a Sorted Matrix
// easy
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let output = 0;
    const arrLen = grid[0].length;
    grid.forEach(item => {
        for (let i = 0; i < arrLen; i++) {
            if (item[i] < 0) {
                output+=(arrLen - i);
                break;
            }
        }
    })
    return output;
};
