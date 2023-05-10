// 1358. Number of Substrings Containing All Three Characters
// Medium

/*
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.
*/
/**
 * @param {string} s
 * @return {number}
 */

// time out
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
// time out
var numberOfSubstrings = function(s) {
    let l = 0;
    let r = 3;
    let output = 0;
    let substring = s.slice(l, r);
    let a = (substring.match(/[a]/g) || []).length;
    let b = (substring.match(/[b]/g) || []).length;
    let c = (substring.match(/[c]/g) || []).length;

    while (l < s.length - 2 && r <= s.length) {
        if (a > 0 && b > 0 && c > 0) {
            output = output + (s.length - r + 1);
            l++;
            if (l === s.length - 2) break;
            r = l + 3;
            substring = s.slice(l, r);
            a = (substring.match(/[a]/g) || []).length;
            b = (substring.match(/[b]/g) || []).length;
            c = (substring.match(/[c]/g) || []).length;
            }
        else {
            if (r < s.length) {
                if (s[r] === "a") a++;
                else if (s[r] === "b") b++;
                else c++;
                r++;
            }
            else {
                l++;
                if (l === s.length - 2) break;
                r = l + 3;
                substring = s.slice(l, r);
                a = (substring.match(/[a]/g) || []).length;
                b = (substring.match(/[b]/g) || []).length;
                c = (substring.match(/[c]/g) || []).length;
            }
        }
    }
    return output;
};

// success
var numberOfSubstrings = function(s) {
    let [l, r, a, b, c, output] = [0, 0, 0, 0, 0, 0];
    while (r < s.length) {
        if (s[r] === "a") a++;
        else if (s[r] === "b") b++;
        else c++;
        while (a && b && c) {
            output = output + (s.length - r);
            if (s[l] === "a") a--;
            else if (s[l] === "b") b--;
            else c--;
            l++;
        }
        r++;
    }
    return output;
};
