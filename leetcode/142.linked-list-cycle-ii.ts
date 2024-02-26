/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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
function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head
    let s = 0
    let f = 0
    while (fast && fast.next) {
        if (slow) {
            slow = slow.next
            s++
        }
        if (fast) {
            fast = fast.next.next
            f += 2
        }
        if (slow === fast) {
            let temp = head
            while (slow !== temp) {
                slow = slow.next
                temp = temp.next
            }
            return temp
        }
    }
    return null
};
// @lc code=end

