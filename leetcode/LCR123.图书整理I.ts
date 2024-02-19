/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBookList(head: ListNode | null): number[] {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result.reverse();
};