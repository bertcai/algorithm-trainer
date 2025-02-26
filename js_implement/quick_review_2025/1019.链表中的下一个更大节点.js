/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 * @lcpr version=30005
 *
 * [1019] 链表中的下一个更大节点
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
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  let p = head
  const listArr = []
  while (p) {
    listArr.push(p.val)
    p = p.next
  }
  const res = []
  const stack = []
  for (let i = listArr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= listArr[i]) {
      stack.pop()
    }
    res[i] = stack.length ? stack[stack.length - 1] : 0
    stack.push(listArr[i])
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,1,5]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,4,3,5]\n
// @lcpr case=end

 */

