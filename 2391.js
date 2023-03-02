// 2391. Minimum Amount of Time to Collect Garbage
// Medium

/*
You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

Return the minimum number of minutes needed to pick up all the garbage.
*/

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */

// answer 1
var garbageCollection = function(garbage, travel) {
    let [metal, paper, glass] = [0, 0, 0];
    let [metalIndex, paperIndex, glassIndex] = [0, 0, 0];
    for (let i = garbage.length - 1; i >= 0; i--) {
        metalIndex = metalIndex === 0 && garbage[i].includes("M") ? i : metalIndex
        paperIndex = paperIndex === 0 && garbage[i].includes("P") ? i : paperIndex
        glassIndex = glassIndex === 0 && garbage[i].includes("G") ? i : glassIndex
    }
    for (let i = 0; i <= metalIndex; i++) {
        let countArr = garbage[i].match(/M/g);
        if (countArr !== null){
            metal += countArr.length;
        }
        if (i < metalIndex){
            metal += travel[i];
        }
    }
    for (let i = 0; i <= paperIndex; i++) {
        let countArr = garbage[i].match(/P/g);
        if (countArr !== null){
            paper += countArr.length;
        }
        if (i < paperIndex){
            paper += travel[i];
        }
    }
    for (let i = 0; i <= glassIndex; i++) {
        let countArr = garbage[i].match(/G/g);
        if (countArr !== null){
            glass += countArr.length;
        }
        if (i < glassIndex){
            glass += travel[i];
        }
    }

    return metal + paper + glass;
};

// ------------------------------------------------------------------------------
// answer 2
var garbageCollection = function(garbage, travel) {
    let [metal, paper, glass] = [0, 0, 0];
    let [metalIndex, paperIndex, glassIndex] = [0, 0, 0];
    for (let i = garbage.length - 1; i >= 0; i--) {
        metalIndex = metalIndex === 0 && garbage[i].includes("M") ? i : metalIndex
        paperIndex = paperIndex === 0 && garbage[i].includes("P") ? i : paperIndex
        glassIndex = glassIndex === 0 && garbage[i].includes("G") ? i : glassIndex
    }
    for (let i = 0; i < garbage.length; i++) {
        let metalCountArr = garbage[i].match(/M/g);
        let paperCountArr = garbage[i].match(/P/g);
        let glassCountArr = garbage[i].match(/G/g);
        if (i <= metalIndex && metalCountArr !== null) {
            metal += metalCountArr.length;
        }
        if (i <= paperIndex && paperCountArr !== null) {
            paper += paperCountArr.length;
        }
        if (i <= glassIndex && glassCountArr !== null) {
            glass += glassCountArr.length;
        }
        metal = i < metalIndex ? metal + travel[i] : metal;
        paper = i < paperIndex ? paper + travel[i] : paper;
        glass = i < glassIndex ? glass + travel[i] : glass;
    }
    return metal + paper + glass;
};
