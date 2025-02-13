/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30005
 *
 * [2] 两数相加
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let jump = 0;
  const dummy = new ListNode(null)
  let p = dummy
  let p1 = l1, p2 = l2
  while (p1 || p2) {
    let val1 = p1?.val || 0
    let val2 = p2?.val || 0
    const val = val1 + val2 + jump
    if (val >= 10) {
      jump = 1
      p.next = new ListNode(val % 10)
      p = p.next
    } else {
      jump = 0
      p.next = new ListNode(val)
      p = p.next
    }
    p1 = p1?.next
    p2 = p2?.next
  }
  if (jump === 1) {
    p.next = new ListNode(1)
  }
  return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

