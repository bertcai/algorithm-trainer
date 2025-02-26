/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30005
 *
 * [5] 最长回文子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const palindrome = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--, r++
    }
    return s.substring(l + 1, r)
  }

  let res = ""
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i)
    const s2 = palindrome(s, i, i + 1)
    res = s1.length > res.length ? s1 : res
    res = s2.length > res.length ? s2 : res
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

