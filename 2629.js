// 2629. Function Composition
// Easy
/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        if (functions.length === 0) return x;
        else {
            let output = x;
            for(i = functions.length - 1; i >= 0; i--){
                output = functions[i](output);
            }
            return output;
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// 這題看到有人用一個原生的方法叫 Array.prototype.reduceRight() 可以從array的右邊往左邊執行，第一次看到所以特別記錄下來
