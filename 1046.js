// 1046. Last Stone Weight
// Easy
/*
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length === 1) return stones[0];
    else if (stones.length === 2) {
        if (stones[0] === stones[1]) return 0;
        else return Math.abs(stones[0] - stones[1]);
    }
    else {
        stones.sort(function(a, b) {
            return b - a;
        });
        if (stones[0] === stones[1]) {
            stones.shift();
            stones.shift();
        }
        else {
            const diff = Math.abs(stones[0] - stones[1]);
            stones.shift();
            stones.shift();
            stones.unshift(diff);
        }
        return lastStoneWeight(stones);
    }
};
