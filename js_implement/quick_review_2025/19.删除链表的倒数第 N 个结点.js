/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30005
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  let p1 = dummy, p2 = dummy
  for (let i = 0; i < n + 1; i++) {
    p2 = p2.next
  }
  while (p2) {
    p1 = p1.next
    p2 = p2.next
  }
  p1.next = p1.next.next
  return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

