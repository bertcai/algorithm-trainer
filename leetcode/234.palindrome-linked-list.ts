/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
    // let left = head
    // const traverse = (right) => {
    //     if (right === null) return true
    //     let res = traverse(right.next)
    //     res = res && (right.val === left.val)
    //     left = left.next
    //     return res
    // }
    // return traverse(head)
    const reverse = (head) => {
        let pre, cur, next
        pre = null, cur = head, next = head
        while (cur) {
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        return pre
    }
    let slow = head, fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let left = head
    let right = reverse(slow)
    while (left && right) {
        if (left.val !== right.val) {
            return false
        }
        left = left.next
        right = right.next
    }
    return true
};
// @lc code=end

