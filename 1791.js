// 1791. Find Center of Star Graph
// easy
/*
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let set = new Set([...edges[0]]);
    if (set.has(edges[1][0])) return edges[1][0];
    else if (set.has(edges[1][1])) return edges[1][1];
};
