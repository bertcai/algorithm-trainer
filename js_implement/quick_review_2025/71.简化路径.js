/*
 * @lc app=leetcode.cn id=71 lang=javascript
 * @lcpr version=30005
 *
 * [71] 简化路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const parts = path.split('/')
  const skt = []
  for (const part of parts) {
    if (part === '' || part === '.') {
      continue
    }
    if (part === '..') {
      if (skt.length > 0) {
        skt.pop()
      }
      continue
    }
    skt.push(part)
  }
  let res = ''
  while (skt.length > 0) {
    res = '/' + skt.pop() + res
  }
  return res || '/'
};
// @lc code=end



/*
// @lcpr case=start
// "/home/"\n
// @lcpr case=end

// @lcpr case=start
// "/home//foo/"\n
// @lcpr case=end

// @lcpr case=start
// "/home/user/Documents/../Pictures"\n
// @lcpr case=end

// @lcpr case=start
// "/../"\n
// @lcpr case=end

// @lcpr case=start
// "/.../a/../b/c/../d/./"\n
// @lcpr case=end

 */

