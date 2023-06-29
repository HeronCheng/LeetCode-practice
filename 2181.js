// 2181. Merge Nodes in Between Zeros
// Medium
/*
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    const arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let sum = 0;
    arr.shift();
    const newArr = [];
    arr.forEach(val => {
        if (val !== 0) sum += val;
        else {
            newArr.push(sum);
            sum = 0;
        }
    })
    return newArr.reduceRight((acc, curr) => {
        curr = new ListNode(curr);
        curr.next = acc;
        return curr;
    }, null)
};
