// Minimum Cuts to Divide a Circle
/* A valid cut in a circle can be:
A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
A cut that is represented by a straight line that touches one point on the edge of the circle and its center.
Given the integer n, return the minimum number of cuts needed to divide a circle into n equal slices.
*/

/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if(n === 1){
        return 0;
    }
    else if(n % 2 !== 0){
        return n;
    }
    else {
        return n/2;
    }
};
