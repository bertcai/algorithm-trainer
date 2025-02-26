/*
 * @lc app=leetcode.cn id=402 lang=javascript
 * @lcpr version=30005
 *
 * [402] 移掉 K 位数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const n = num.length
  let count = k
  const stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] > num[i]) {
      if (count === 0) break
      stack.pop()
      count--
    }
    stack.push(num[i])
    // console.log(stack)
  }
  while (count) {
    stack.pop()
    count--
  }
  while (stack[0] === '0') {
    stack.shift()
  }
  return stack.join('') || '0'
};
// @lc code=end



/*
// @lcpr case=start
// "1432219"\n3\n
// @lcpr case=end

// @lcpr case=start
// "10200"\n1\n
// @lcpr case=end

// @lcpr case=start
// "10"\n2\n
// @lcpr case=end

 */

