/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30005
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const reverse = (head) => {
    let pre = null, cur = head
    while (cur) {
      let next = cur.next
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
  if (fast) {
    slow = slow.next
  }
  let left = head
  let right = reverse(slow)
  while (right) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

