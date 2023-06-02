// 2703. Return Length of Arguments Passed
// Easy
// Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return [...args].length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
