// 1436. Destination City
// easy
/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
*/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    if (paths.length === 1) return paths[0][1];
    const currCity = paths[0][1]; 
    function recursive (curr, paths) {
        for (let i = 0; i < paths.length; i++) {
            if (paths[i][0] === curr) {
                return recursive(paths[i][1], paths);
            }
        }
        return curr;
    }
    return recursive(currCity, paths);
};
