/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 * @lcpr version=30005
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const q = []
  const maxq = []
  const minq = []
  const push = (v) => {
    q.push(v)
    while (maxq.length && maxq[maxq.length - 1] < v) {
      maxq.pop()
    }
    maxq.push(v)
    while (minq.length && minq[minq.length - 1] > v) {
      minq.pop()
    }
    minq.push(v)
  }
  const pop = () => {
    const v = q.shift()
    if (v === maxq[0]) {
      maxq.shift()
    }
    if (v === minq[0]) {
      minq.shift()
    }
  }
  const max = () => {
    return maxq[0]
  }
  const min = () => {
    return minq[0]
  }
  const n = nums.length
  let res = 0
  let left = 0, right = 0
  while (right < n) {
    push(nums[right])
    right++
    while (max() - min() > limit) {
      pop()
      left++
    }
    // console.log(q, maxq, minq)
    res = Math.max(res, q.length)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [8,2,4,7]\n4\n
// @lcpr case=end

// @lcpr case=start
// [10,1,2,4,7,2]\n5\n
// @lcpr case=end

// @lcpr case=start
// [4,2,2,2,4,4,2,2]\n0\n
// @lcpr case=end

 */

