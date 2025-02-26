/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 * @lcpr version=30005
 *
 * [1475] 商品折扣后的最终价格
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const n = prices.length
  const res = []
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    res[i] = stack.length ? prices[i] - stack[stack.length - 1] : prices[i]
    stack.push(prices[i])
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [8,4,6,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [10,1,1,6]\n
// @lcpr case=end

 */

