// 2657. Find the Prefix Common Array of Two Arrays
// Medium
/*
You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let output = [];
    for (let i = 0; i < A.length; i++) {
        const a = A.slice(0,i + 1);
        const b = new Set(B.slice(0,i + 1));
        let result = a.filter((e)=>{
            return b.has(e);
        })
        output.push(result.length);
    }
    return output;
};
