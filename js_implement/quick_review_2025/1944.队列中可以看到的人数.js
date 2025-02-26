/*
 * @lc app=leetcode.cn id=1944 lang=javascript
 * @lcpr version=30005
 *
 * [1944] 队列中可以看到的人数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  const n = heights.length
  const res = new Array(n).fill(0)
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    let count = 0
    while (stack.length && stack[stack.length - 1] <= heights[i]) {
      stack.pop()
      count++
    }
    res[i] = stack.length ? count + 1 : count
    stack.push(heights[i])
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [10,6,8,5,11,9]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,2,3,10]\n
// @lcpr case=end

 */

