// 104. Maximum Depth of Binary Tree
// easy
// Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// recursive
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// non-recursive
var maxDepth = function(root) {
    if(!root) return 0;
    // using BFS and counting levels
    // not recommended to use array as queue
    let levels = 0, queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        const count = queue.length;
        for(let i = 0; i < count; i++){
            const node = queue.shift();
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
        }
        levels++;
    }
    return levels;
};
// still not very familiar about binary tree
