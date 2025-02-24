/*
 * @lc app=leetcode.cn id=388 lang=javascript
 * @lcpr version=30005
 *
 * [388] 文件的最长绝对路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const parts = input.split('\n')
  let stack = []
  let res = 0
  for (const part of parts) {
    let level = part.lastIndexOf('\t') + 1
    while (level < stack.length) {
      stack.pop()
    }
    stack.push(part.substring(level))
    if (part.includes('.')) {
      let sum = stack.reduce((acc, cur) => acc + cur.length, 0)
      sum += stack.length - 1
      res = Math.max(res, sum)
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"\n
// @lcpr case=end

// @lcpr case=start
// "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

// @lcpr case=start
// "file1.txt\nfile2.txt\nlongfile.txt"\n
// @lcpr case=end

 */

