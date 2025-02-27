/*
 * @lc app=leetcode.cn id=918 lang=javascript
 * @lcpr version=30005
 *
 * [918] 环形子数组的最大和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length
  const preSum = new Array(2 * n + 1).fill(0)
  for (let i = 1; i < 2 * n + 1; i++) {
    preSum[i] = preSum[i - 1] + nums[(i - 1) % n]
  }
  const minQ = []
  const window = []
  let res = -Infinity
  function push(n) {
    window.push(n)
    while (minQ.length && minQ[minQ.length - 1] > n) {
      minQ.pop()
    }
    minQ.push(n)
  }
  function pop() {
    const n = window.shift()
    if (n === minQ[0]) {
      minQ.shift()
    }
  }
  function min() {
    return minQ[0]
  }
  // 记录答案
  let maxSum = -Infinity;
  // 维护一个滑动窗口，以便根据窗口中的最小值计算最大子数组和
  push(0);
  for (let i = 1; i < preSum.length; i++) {
    maxSum = Math.max(maxSum, preSum[i] - min());
    // 维护窗口的大小为 nums 数组的大小
    if (window.length === n) {
      pop();
    }
    push(preSum[i]);
  }
  return maxSum
};
// @lc code=end



/*
// @lcpr case=start
// [1,-2,3,-2]\n
// @lcpr case=end

// @lcpr case=start
// [5,-3,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,-2,2,-3]\n
// @lcpr case=end

 */

