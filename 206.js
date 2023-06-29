// 206. Reverse Linked List
// easy
// Given the head of a singly linked list, reverse the list, and return the reversed list.

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
var reverseList = function(head) {
    if (!head) return head;
    const newArr = [];
    while (head) {
        newArr.push(head.val);
        head = head.next;
    }
    newArr.reverse();
    return newArr.reduceRight((acc, curr) => {
        curr = new ListNode(curr);
        curr.next = acc;
        return curr;
    }, null);
};
