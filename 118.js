// 118. Pascal's Triangle
// Easy
// Given an integer numRows, return the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    else if (numRows === 2) return [[1],[1,1]];
    else {
        const originArr = [[1],[1,1]];
        for (let i = 3; i <= numRows; i++) {
            let newArr = new Array(i);
            newArr[0] = 1;
            newArr[i - 1] = 1;
            for (let j = 1; j < i - 1; j++) {
                newArr[j] = originArr[i - 2][j - 1] + originArr[i - 2][j];
            }
            originArr.push(newArr);
        }
        return originArr;
    }
};
