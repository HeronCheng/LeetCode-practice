// 876. Middle of the Linked List
// easy

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
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
var middleNode = function(head) {
    let arr = [];
    let newList = head;
    while (newList) {
        arr.push(newList.val);
        newList = newList.next;
    }
    const len = arr.length;
    const middle = Math.floor(len/2);
    while (head) {
        if (head.val === arr[middle] && head.next?.val === arr[middle + 1]) break
        head = head.next;
    }
    return head;
};
