// 111. Minimum Depth of Binary Tree
// easy
/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

// binary tree

// recursive
var minDepth = function(root) {
    if (!root) return 0;
    if(!root.left && !root.right) return 1;
    let right = minDepth(root.right);
    let left = minDepth(root.left);
    if (right  === 0) return left + 1;
    if (left  === 0) return right + 1;
    return Math.min(right, left) + 1;
};

// non-recursive
var minDepth = function(root) {
    if (!root) return 0;
    if(!root.left && !root.right) return 1;
    let level = 0;
    const arr = [root];
    while (arr.length > 0){
        level++;
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            const capital = arr.pop();
            if(!capital.left && !capital.right) return level;
            if(capital.left) arr.unshift(capital.left);
            if(capital.right) arr.unshift(capital.right);
        }
    }
    return level;
};
