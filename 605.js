// 605. Can Place Flowers
// Easy
/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let placeCanPlant = 0;
    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;
        let condition1 = i === 0 && flowerbed[i + 1] === 0;
        let condition2 = i === flowerbed.length - 1 && flowerbed[i - 1] === 0;
        let condition3 = flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0;
        if (condition1 || condition2 ||condition3) {
            placeCanPlant++;
            flowerbed[i] = 1;
        }
    }
    return placeCanPlant >= n ? true : false; 
};
