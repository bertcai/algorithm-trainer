/*
 * @lc app=leetcode.cn id=567 lang=javascript
 * @lcpr version=30005
 *
 * [567] 字符串的排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) return false
  let need = new Map(), window = new Map()
  for (let c of s1) {
    need.set(c, (need.get(c) || 0) + 1)
  }
  let left = 0, right = 0
  let valid = 0
  while (right < s2.length) {
    const c = s2[right]
    right++
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) {
        valid++
      }
    }
    while (right - left === s1.length) {
      if (valid === need.size) return true
      const c = s2[left]
      left++
      if (need.has(c)) {
        if (window.get(c) === need.get(c)) {
          valid--
        }
        window.set(c, window.get(c) - 1)
      }
    }
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// "ab"\n
// "eidbaooo"\n
// @lcpr case=end

// @lcpr case=start
// "ab"\n
// "eidboaoo"\n
// @lcpr case=end

 */

