// 1266. Minimum Time Visiting All Points
// easy
/*
On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

You can move according to these rules:

In 1 second, you can either:
move vertically by one unit,
move horizontally by one unit, or
move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
You have to visit the points in the same order as they appear in the array.
You are allowed to pass through points that appear later in the order, but these do not count as visits.
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 0; i < points.length - 1; i++) {
        if (points[i][0] === points[i + 1][0]) {
            const diff = points[i + 1][1] - points[i][1];
            count = count + Math.abs(diff);
        }
        else if (points[i][1] === points[i + 1][1]) {
            const diff = points[i + 1][0] - points[i][0];
            count = count + Math.abs(diff);
        }
        else {
            const xiff = Math.abs(points[i + 1][0] - points[i][0]);
            const yDiff = Math.abs(points[i + 1][1] - points[i][1]);
            const min = Math.min(xiff, yDiff);
            const totalDiff = Math.max(xiff - min, yDiff - min);
            count = count + min + totalDiff;
        }
    }
    return count;
};
