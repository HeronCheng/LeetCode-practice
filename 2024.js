// 2024. Maximize the Confusion of an Exam
// Medium
/*
A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.
*/

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
// success
var maxConsecutiveAnswers = function(answerKey, k) {
    if (answerKey.length === 1) return 1;
    else {
        let result = k;
        let i = 0;
        let j = k;
        let string = answerKey.slice(i, j);
        let tCount = (string.match(/T/g) || []).length;
        let fCount = string.length - tCount;
        while (i < answerKey.length - k && j < answerKey.length + 1 && answerKey.length - i > result) {
            if (Math.min(tCount, fCount) <= k) {
                result = Math.max(result, answerKey.slice(i, j).length);
                j++;
                if (answerKey.at(j - 1) === "T") tCount++;
                else fCount++
            }
            else {
                i++;
                if (answerKey.at(i - 1) === "T") tCount--;
                else fCount--
            }            
        }
        return result;
    }
};

// timeout
var maxConsecutiveAnswers = function(answerKey, k) {
    const result = [];
    if (answerKey.length === 1) {
        return 1;
    }
    else {
        for (let i = 0; i < answerKey.length; i++) {
            let duplicate = answerKey;
            let count = 1;
            let leftOver = k;
            for (let j = i; j < answerKey.length - 1; j++) {
                if (duplicate[j] === duplicate[j+1]) {
                    count ++;
                }
                else if (duplicate[j] !== duplicate[j+1] && leftOver > 0) {
                    count ++;
                    leftOver --;
                    duplicate = duplicate.slice(0, j + 1) + duplicate[j] + duplicate.slice(j + 2);
                }
                else if (duplicate[j] !== duplicate[j+1] && leftOver === 0) {
                    break;
                }
            }
            result.push(count);
        }
        return Math.max(...result);
    }
};
