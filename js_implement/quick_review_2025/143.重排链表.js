/*
 * @lc app=leetcode.cn id=143 lang=javascript
 * @lcpr version=30005
 *
 * [143] 重排链表
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const stack = []
  let p = head
  while (p.next) {
    stack.push(p.next)
    p = p.next
  }
  p = head
  let shift = false
  while (stack.length) {
    let next = null
    if (shift) {
      next = stack.shift()
      shift = false
    } else {
      next = stack.pop()
      shift = true
    }
    next.next = null
    p.next = next
    p = p.next
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

 */

