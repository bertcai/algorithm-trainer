/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = new ListNode(0);
  let cur = result
  let carry = 0
  while(l1 !== null || l2 !==null || carry !== 0) {
    const temp = (l1?.val || 0) + (l2?.val || 0) + carry
    if(temp < 10){
      carry = 0
    } else{
      carry = 1
    }
    cur.next = new ListNode(temp % 10)
    cur = cur.next
    l1 = l1?.next || null
    l2 = l2?.next || null

  }
  return result.next
}
// @lc code=end
