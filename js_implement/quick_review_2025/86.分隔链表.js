/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30005
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummy1 = new ListNode(null)
  const dummy2 = new ListNode(null)
  let p1 = dummy1, p2 = dummy2
  let p = head
  while (p !== null) {
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    const temp = p.next
    p.next = null
    p = temp
  }
  p1.next = dummy2.next
  return dummy1.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

