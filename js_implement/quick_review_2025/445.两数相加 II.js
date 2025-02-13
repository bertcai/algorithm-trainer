/*
 * @lc app=leetcode.cn id=445 lang=javascript
 * @lcpr version=30005
 *
 * [445] 两数相加 II
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
  let p1 = l1, p2 = l2
  const stack1 = []
  const stack2 = []
  while (p1) {
    stack1.push(p1.val)
    p1 = p1.next
  }
  while (p2) {
    stack2.push(p2.val)
    p2 = p2.next
  }
  let carry = 0
  let res = []
  while (stack1.length || stack2.length) {
    const val1 = stack1.pop() || 0
    const val2 = stack2.pop() || 0
    const val = val1 + val2 + carry
    if (val >= 10) {
      res.push(val % 10)
      carry = 1
    } else {
      res.push(val)
      carry = 0
    }
  }
  if (carry) {
    res.push(1)
  }
  const dummy = new ListNode()
  let p = dummy
  while (res.length) {
    p.next = new ListNode(res.pop())
    p = p.next
  }
  return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [7,2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

 */

