/*
 * @lc app=leetcode.cn id=1329 lang=javascript
 * @lcpr version=30005
 *
 * [1329] 将矩阵按对角线排序
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const m = mat.length, n = mat[0].length
  const map = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map.has(i - j)) {
        const arr = map.get(i - j)
        arr.push(mat[i][j])
      } else {
        const arr = new Array()
        arr.push(mat[i][j])
        map.set(i - j, arr)
      }
    }
  }
  for (let value of map.values()) {
    value = value.sort((a, b) => b - a)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const arr = map.get(i - j)
      mat[i][j] = arr.pop()
    }
  };
  return mat
}
// @lc code=end



/*
// @lcpr case=start
// [[3,3,1,1],[2,2,1,2],[1,1,1,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]\n
// @lcpr case=end

 */

