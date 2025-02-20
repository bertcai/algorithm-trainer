/*
 * @lc app=leetcode.cn id=395 lang=javascript
 * @lcpr version=30005
 *
 * [395] 至少有 K 个重复字符的最长子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const longestSubstringCount = function (s, k, count) {
    let left = 0, right = 0
    let kinds = 0
    const window = new Map()
    let res = 0
    while (right < s.length) {
      const char = s[right]
      right++
      if (window.has(char)) {
        window.set(char, window.get(char) + 1)
      } else {
        window.set(char, 1)
      }
      while (window.size > count) {
        const del = s[left]
        if (window.get(del) === 1) {
          window.delete(del)
        } else {
          window.set(del, window.get(del) - 1)
        }
        left++
      }
      const values = window.values()
      if (values.every(a => a >= k)) {
        res = Math.max(res, right - left)
      }
    }
    return res
  }

  const resArr = []
  for (let i = 1; i <= 26; i++) {
    resArr.push(longestSubstringCount(s, k, i))
  }
  return Math.max(...resArr)
};
// @lc code=end



/*
// @lcpr case=start
// "aaabb"\n3\n
// @lcpr case=end

// @lcpr case=start
// "ababbc"\n2\n
// @lcpr case=end

 */

