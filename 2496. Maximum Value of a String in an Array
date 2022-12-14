/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;
    const regex = /[a-z]/g;
    strs.forEach((item) => {
        if(item.match(regex)){
            max = item.length > max ? item.length:max
            console.log(max)
        }
        else{
            max = Number(item) > max ? Number(item):max
            console.log(max)
        }
    })
    return max;
};
