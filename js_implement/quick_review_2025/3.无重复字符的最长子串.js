/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30005
 *
 * [3] 无重复字符的最长子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let window = {}
  let left = 0, right = 0
  let res = 0
  while (right < s.length) {
    const c = s[right]
    right++
    window[c] = (window[c] || 0) + 1
    while (window[c] > 1) {
      const d = s[left]
      left++
      window[d] = window[d] - 1
    }
    res = Math.max(res, right - left)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

