/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30005
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head == null) return null;
  const reverseN = (head, n) => {
    if (!head || !head.next) {
      return head
    }
    let pre = null, cur = head, next = head.next, p = n
    while (p > 0) {
      cur.next = pre
      pre = cur
      cur = next
      if (next) {
        next = next.next
      }
      p--
    }
    head.next = pre
    return pre
  }
  let tail1 = head, tail12 = head
  for (let i = 0; i < k; i++) {
    if (tail12 === null) return head
    tail12 = tail12.next
  }
  let last = reverseN(tail1, k)
  tail1.next = reverseKGroup(tail12, k)
  return last
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */

