// 846. Hand of Straights
// Medium
/*
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.
*/

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    hand.sort((a, b) => a - b);
    while (hand.length > 0) {
      const firstNum = hand.shift();
      const arr = Array(groupSize - 1).fill().map((el, index) => index + firstNum + 1);
      if (!arr.every(val=> hand.includes(val))) return false;
      hand = hand.filter(item => {
      	const res = arr.indexOf(item);
       if (res !== -1) arr.splice(res, 1)
        return res === -1;
      })
    }
    return true
};
