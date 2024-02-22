/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
 */

// @lc code=start
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    const dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    let i = dummy.next
    let j = dummy.next.next
    while (cur.next?.next) {
        if (cur.next.val === cur.next.next.val) {
            const temp = cur.next.val
            while (cur.next?.val === temp) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};
// @lc code=end

