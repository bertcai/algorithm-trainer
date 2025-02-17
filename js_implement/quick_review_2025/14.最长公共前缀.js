/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30005
 *
 * [14] 最长公共前缀
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  let res = ''
  let p = 0
  while (p < strs[0].length) {
    const target = strs[0][p]
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][p] !== target) return res
    }
    res += target
    p++
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */

