/*
 * @lc app=leetcode.cn id=739 lang=javascript
 * @lcpr version=30005
 *
 * [739] 每日温度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const res = [], len = temperatures.length, stack = []
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1].temp <= temperatures[i]) {
      stack.pop()
    }
    res[i] = stack.length ? stack[stack.length - 1].index - i : 0
    stack.push({
      temp: temperatures[i],
      index: i
    })
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [73,74,75,71,69,72,76,73]\n
// @lcpr case=end

// @lcpr case=start
// [30,40,50,60]\n
// @lcpr case=end

// @lcpr case=start
// [30,60,90]\n
// @lcpr case=end

 */

