/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummy = new ListNode()
    dummy.next = head
    let pre, cur, leftHead
    let p = dummy
    for (let i = 0; i < left - 1; i++) {
        p = p.next
    }
    leftHead = p
    let start = leftHead.next
    pre = start
    cur = start.next
    for (let i = left; i < right; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    start.next = cur
    leftHead.next = pre
    return dummy.next
};
// @lc code=end

