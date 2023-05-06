// 1773. Count Items Matching a Rule
// Easy

/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.
*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let output = 0;
    items.forEach(item => {
        if (ruleKey === "type" && item[0] === ruleValue) output++;
        else if (ruleKey === "color" && item[1] === ruleValue) output++;
        else if (ruleKey === "name" && item[2] === ruleValue) output++;
    })
    return output;
};
