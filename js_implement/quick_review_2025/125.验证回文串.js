/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30005
 *
 * [125] 验证回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regxp = /\d|[a-zA-Z]/
  let res = s.toLowerCase().split('').filter(c =>
    regxp.test(c)
  )
  return res.join('') === res.reverse().join('')
};
// @lc code=end



/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

