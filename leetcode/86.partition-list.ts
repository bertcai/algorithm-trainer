/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
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

function partition(head: ListNode | null, x: number): ListNode | null {
    let dummy1 = new ListNode()
    let dummy2 = new ListNode()
    let p1 = dummy1, p2 = dummy2
    let cur = head
    while (cur) {
        if (cur.val < x) {
            p1.next = cur
            p1 = p1.next
        } else {
            p2.next = cur
            p2 = p2.next
        }
        let temp = cur.next
        cur.next = null
        cur = temp
    }
    p1.next = dummy2.next
    return dummy1.next
};
// @lc code=end

