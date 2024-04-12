/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const reverse = (a, b) => {
        let pre, cur, next;
        pre = null; cur = a; next = a;
        while (cur !== b) {
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        return pre
    }
    if (head === null) return null
    let a, b
    a = b = head
    for (let i = 0; i < k; i++) {
        if (b === null) return head
        b = b.next
    }
    let newHead = reverse(a, b)
    a.next = reverseKGroup(b, k)
    return newHead
};
// @lc code=end

