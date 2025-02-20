/*
 * @lc app=leetcode.cn id=424 lang=javascript
 * @lcpr version=30005
 *
 * [424] 替换后的最长重复字符
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const aCode = 'A'.charCodeAt(0)
  let left = 0, right = 0
  let windowCharCount = new Array(26).fill(0)
  let windowMaxCount = 0
  let res = 0
  while (right < s.length) {
    let cIndex = s.charCodeAt(right) - aCode
    right++
    windowCharCount[cIndex]++
    windowMaxCount = Math.max(windowMaxCount, windowCharCount[cIndex])
    while (right - left - windowMaxCount > k) {
      let dIndex = s.charCodeAt(left) - aCode
      left++
      windowCharCount[dIndex]--
    }
    if (right - left - windowMaxCount <= k) {
      res = Math.max(right - left, res)
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "ABAB"\n2\n
// @lcpr case=end

// @lcpr case=start
// "AABABBA"\n1\n
// @lcpr case=end

 */

