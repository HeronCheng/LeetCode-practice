// 2465. Number of Distinct Averages

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let average = [];
    const numsLength = nums.length;
    for(let i = 0; i<(numsLength/2);i++){
        let maxNum = Math.max(...nums);
        let minNum = Math.min(...nums);
        average.push((maxNum + minNum)/2);
        const maxIndex = nums.indexOf(maxNum);   
        nums.splice(maxIndex, 1);
        const minIndex = nums.indexOf(minNum);   
        nums.splice(minIndex, 1);
    }
    const arrToSet = new Set(average);
    const uniqueArray = [...arrToSet];
    return uniqueArray.length;
};
