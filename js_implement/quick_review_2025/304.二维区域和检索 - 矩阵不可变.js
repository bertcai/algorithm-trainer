/*
 * @lc app=leetcode.cn id=304 lang=javascript
 * @lcpr version=30005
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length, n = matrix[0].length
  // preSum[i][j] 记录矩阵 [0, 0, i-1, j-1] 的元素和
  this.preSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  if (m == 0 || n == 0) return;
  // 构造前缀和矩阵
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 计算每个矩阵 [0, 0, i, j] 的元素和
      this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] + matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.preSum[row2 + 1][col2 + 1] - this.preSum[row1][col2 + 1] - this.preSum[row2 + 1][col1] + this.preSum[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end



/*
// @lcpr case=start
// ["NumMatrix","sumRegion","sumRegion","sumRegion"][[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]\n
// @lcpr case=end

 */

