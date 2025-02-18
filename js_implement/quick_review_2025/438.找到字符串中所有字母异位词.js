/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30005
 *
 * [438] 找到字符串中所有字母异位词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = {}, window = {}
  for (let key of p) {
    need[key] = (need[key] || 0) + 1
  }
  let left = 0, right = 0
  let res = []
  let valid = 0
  let needlen = Object.keys(need).length
  while (right < s.length) {
    const c = s[right]
    right++
    if (need[c]) {
      window[c] = (window[c] || 0) + 1
      if (window[c] === need[c]) {
        valid++
      }
    }
    while (right - left === p.length) {
      if (valid === needlen) {
        res.push(left)
      }
      const d = s[left]
      left++
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d] = window[d] - 1
      }
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */

