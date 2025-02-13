/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30005
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const dummyDup = new ListNode(101)
  const dummyUni = new ListNode(101)
  let pDup = dummyDup, pUni = dummyUni
  let p = head

  while (p !== null) {
    if ((p.next && p.next.val === p.val) || pDup.val === p.val) {
      pDup.next = p
      pDup = pDup.next
    } else {
      pUni.next = p
      pUni = pUni.next
    }
    const temp = p.next
    p.next = null
    p = temp
  }
  return dummyUni.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

