/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30005
 *
 * [20] 有效的括号
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const has = map[char]
    if (!has) {
      stack.push(char)
    } else {
      if (stack.pop() === map[char]) {
        continue
      } else {
        return false
      }
    }
  }
  if (stack.length) return false
  return true
};
// @lc code=end



/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

 */

