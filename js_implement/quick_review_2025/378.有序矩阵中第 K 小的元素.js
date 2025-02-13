/*
 * @lc app=leetcode.cn id=378 lang=javascript
 * @lcpr version=30005
 *
 * [378] 有序矩阵中第 K 小的元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length
  const minPQ = new PriorityQueue({
    compare: (a, b) => a.val < b.val ? -1 : 1
  })
  for (let i = 0; i < n; i++) {
    minPQ.enqueue({
      val: matrix[i][0],
      x: 0,
      y: i
    })
  }
  let p = 0
  let res
  while (!minPQ.isEmpty() && p < k) {
    const node = minPQ.dequeue()
    res = node.val
    if (node.x + 1 < n) {
      minPQ.enqueue({
        val: matrix[node.y][node.x + 1],
        x: node.x + 1,
        y: node.y
      })
    }
    p++
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,5,9],[10,11,13],[12,13,15]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[-5]]\n1\n
// @lcpr case=end

 */

