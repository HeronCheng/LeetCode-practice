// 2130. Maximum Twin Sum of a Linked List
// Medium
/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.
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
 * @return {number}
 */
var pairSum = function(head) {
    let sumArr = [];
    let newHead = [];
    while (head) {
        newHead.push(head.val);
        head = head.next;
    }
    let i = 1;
    while (i <= newHead.length/2) {
        let sum = newHead[i - 1] + newHead[newHead.length - i];
        sumArr.push(sum);
        i++;
    }
    return Math.max(...sumArr);
};
