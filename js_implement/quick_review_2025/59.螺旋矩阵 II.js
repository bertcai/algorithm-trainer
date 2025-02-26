/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30005
 *
 * [59] 螺旋矩阵 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let upper_bound = 0, lower_bound = n - 1;
  let left_bound = 0, right_bound = n - 1;
  let num = 1;
  let res = new Array(n).fill().map(() => new Array(n).fill(0));
  while (num <= n * n) {
    if (upper_bound <= lower_bound) {
      for (let j = left_bound; j <= right_bound; j++) {
        res[upper_bound][j] = num;
        num++;
      }
      upper_bound++;
    }
    if (left_bound <= right_bound) {
      for (let i = upper_bound; i <= lower_bound; i++) {
        res[i][right_bound] = num;
        num++;
      }
      right_bound--;
    }
    if (upper_bound <= lower_bound) {
      for (let j = right_bound; j >= left_bound; j--) {
        res[lower_bound][j] = num;
        num++;
      }
      lower_bound--;
    }
    if (left_bound <= right_bound) {
      for (let i = lower_bound; i >= upper_bound; i--) {
        res[i][left_bound] = num;
        num++;
      }
      left_bound++;
    }
  }
  return res;
};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

