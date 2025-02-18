/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30005
 *
 * [76] 最小覆盖子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tmap = {}, window = {}
  for (let i = 0; i < t.length; i++) {
    const key = t[i]
    tmap[key] = (tmap[key] || 0) + 1
  }
  let left = 0, right = 0
  let start = 0, len = Infinity
  let valid = 0
  while (right < s.length) {
    const c = s[right]
    right++
    if (tmap[c]) {
      window[c] = (window[c] || 0) + 1
      if (window[c] === tmap[c]) {
        valid++
      }
    }

    while (valid === Object.keys(tmap).length) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      const d = s[left]
      left++
      if (tmap[d]) {
        if (tmap[d] === window[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return len === Infinity ? '' : s.substring(start, start + len)
};
// @lc code=end



/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */

