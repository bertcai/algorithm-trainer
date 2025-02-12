/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30005
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  const dummy = new ListNode(null)
  let p = dummy
  const minQueue = new PriorityQueue({
    compare: (a, b) => a.val < b.val ? -1 : 1
  })
  lists.forEach(list => {
    if (list) {
      minQueue.enqueue(list)
    }
  })
  while (!minQueue.isEmpty()) {
    const node = minQueue.dequeue()
    console.log(node.val)
    p.next = node
    if (node.next) {
      minQueue.enqueue(node.next)
    }
    p = p.next
  }
  return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

