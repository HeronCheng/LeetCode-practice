// 1122. Relative Sort Array
// easy
/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a, b) => {
        let indexA = arr2.findIndex(ele => ele === a);
        let indexB = arr2.findIndex(ele => ele === b);

        if (indexA === -1 && indexB !== -1) return indexB - indexA;
        if (indexA === -1 && indexB === -1) return a - b;
        if (indexA !== -1 && indexB === -1) return b - a;
        return indexA - indexB;
    })
};
