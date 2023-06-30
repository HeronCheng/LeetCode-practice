// 21. Merge Two Sorted Lists
// easy
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const arr = [];
    while (list1 || list2) {
        if (list1) {
            arr.push(list1.val);
            list1 = list1.next;
        }
        if (list2) {
            arr.push(list2.val);
            list2 = list2.next;
        }
    }
    arr.sort((a,b) => a - b);
    return arr.reduceRight((acc, curr) => {
        return new ListNode(curr, acc);
    }, null)
};
