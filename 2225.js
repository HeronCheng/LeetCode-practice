// 2225. Find Players With Zero or One Losses
// Medium
/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
*/

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

// 本次提交結果 timeout
var findWinners = function(matches) {
    let allPlayers = matches.join().split(",")
    allPlayers = [...new Set(allPlayers)];

    const lose = matches.map((item) => {
        return item[1];
    }).sort((a,b) => a-b);

    const champion = allPlayers.filter(player => !lose.includes(Number(player))).sort((a,b) => a-b);

    const secondPlace = [];
    const loserTeam = [];
    for(let i = 0; i < lose.length; i++) {
        if (lose[i] === lose[i+1]) {
            loserTeam.push(lose[i])
            i++;
        }
        else {
            if (!loserTeam.includes(lose[i])) {
                secondPlace.push(lose[i])
            }
        }
    }
    return [champion, secondPlace]
};

// 有通過，但耗時仍久
var findWinners = function(matches) {
    let allPlayers = matches.join().split(",")
    allPlayers = [...new Set(allPlayers)];

    const len = (Math.max(...allPlayers)) + 1;
    const count = Array.from({length:len},() => ([0,0]))
    matches.forEach((match) => {
        count[match[0]][0]+=1;
        count[match[1]][1]+=1;
    })

    const champion = count.reduce((acc, curr, index) => {
        if (curr[1] === 0 && index !== 0 && curr[0] !== 0 ) {
            acc.push(index);
        }
        return acc;
        }, []
    );
    const secondPlace = count.reduce((acc, curr, index) => {
        if (curr[1] === 1) {
            acc.push(index);
        }
        return acc;
        }, []
    );
    return [champion, secondPlace]
};
