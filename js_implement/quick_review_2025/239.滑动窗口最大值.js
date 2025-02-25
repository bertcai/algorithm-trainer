/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=30005
 *
 * [239] 滑动窗口最大值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const maxQ = []
  const push = (n) => {
    while (maxQ.length && maxQ[maxQ.length - 1] < n) {
      maxQ.pop()
    }
    maxQ.push(n)
  }
  const pop = (n) => {
    if (n === maxQ[0]) {
      maxQ.shift()
    }
  }
  const max = () => {
    return maxQ[0]
  }
  const res = []
  for (let i = 0; i < nums.length; i++) {
    push(nums[i])
    if (i > k - 1) {
      pop(nums[i - k])
    }
    if (i >= k - 1) {
      res.push(max())
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */

