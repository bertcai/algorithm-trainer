/*
 * @lc app=leetcode.cn id=150 lang=javascript
 * @lcpr version=30005
 *
 * [150] 逆波兰表达式求值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const ptr = '+-*/'
  const stack = []
  while (tokens.length) {
    const cur = tokens.shift()
    const index = ptr.indexOf(cur)
    if (index > -1) {
      // console.log(cur)
      const num2 = stack.pop()
      const num1 = stack.pop()
      let res
      switch (index) {
        case 0:
          res = num1 + num2
          break;
        case 1:
          res = num1 - num2
          break
        case 2:
          res = num1 * num2
          break
        case 3:
          res = Math.trunc(num1/num2)
        default:
          break;
      }
      stack.push(res)
    } else {
      stack.push(Number.parseInt(cur))
    }
    // console.log(stack)
  }
  return stack[0]
};
// @lc code=end



/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */

