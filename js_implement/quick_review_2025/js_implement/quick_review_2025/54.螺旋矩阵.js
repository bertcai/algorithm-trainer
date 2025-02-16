/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30005
 *
 * [54] 螺旋矩阵
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix[0].length, n = matrix.length
  let right_bound = m - 1, left_bound = 0
  let upper_bound = 0, lower_bound = n - 1
  const res = []
  while (res.length < m * n) {
    if (upper_bound <= lower_bound) {
      for (let i = left_bound; i <= right_bound; i++) {
        res.push(matrix[upper_bound][i])
      }
      upper_bound++
    }
    if (left_bound <= right_bound) {
      for (let i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound])
      }
      right_bound--
    }
    if (upper_bound <= lower_bound) {
      for (let i = right_bound; i >= left_bound; i--) {
        res.push(matrix[lower_bound][i])
      }
      lower_bound--
    }
    if (left_bound <= right_bound) {
      for (let i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound])
      }
      left_bound++
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */

