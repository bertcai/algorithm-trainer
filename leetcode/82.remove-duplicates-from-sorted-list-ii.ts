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
    if (!head) return null
    const dummy = new ListNode()
    dummy.next = head
    let p = dummy, q = dummy.next
    let flag = false
    while (q.next) {
        if (p.next && p.next.val === q.next.val) {
            flag = true
            q = q.next
            continue
        }
        if (flag) {
            p.next = q.next
            q = q.next
            flag = false
            continue
        }
        p = p.next
        q = q.next
    }
    if (flag) {
        p.next = q.next
    }
    return dummy.next
};
// @lc code=end

