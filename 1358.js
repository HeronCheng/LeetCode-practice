// 1358. Number of Substrings Containing All Three Characters
// Medium

/*
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.
*/

// time out
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let l = 0;
    let r = 3;
    let output = 0;
    const regex = /^(?=.*a)(?=.*b)(?=.*c).*$/;
    let substring = s.slice(l, r);
    while (l < s.length - 2 && r <= s.length) {
        if (regex.test(substring)) {
            output = output + (s.length - r + 1);
            l++;
            if (l === s.length - 2) break;
            r = l + 3;
            substring = s.slice(l, r);
        }
        else {
            if (r < s.length) {
                substring = substring + s[r];
                r++;
            }
            else {
                l++;
                if (l === s.length - 2) break;
                r = l + 3;
                substring = s.slice(l, r);
            }
        }
    }
    return output;
};
