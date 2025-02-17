/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 * @lcpr version=30005
 *
 * [1260] 二维网格迁移
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length, n = grid[0].length
  const arr = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(grid[i][j])
    }
  }
  k = k % (m * n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const now = i * n + j
      grid[i][j] = arr[(m * n - k + now) % arr.length]
    }
  }
  return grid
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]\n4\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n9\n
// @lcpr case=end

 */

