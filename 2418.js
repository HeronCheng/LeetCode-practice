// 2418. Sort the People
/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
*/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names
    .map((val, index)=>{
        return {
            name: val,
            height: heights[index]
        }
    })
    .sort( (a, b) => {
        return a.height > b.height ? -1 : 1;
    })
    .map((val) => {
        return val.name;
    })
};
