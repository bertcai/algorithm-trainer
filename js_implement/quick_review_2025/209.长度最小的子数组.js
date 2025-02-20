/*
 * @lc app=leetcode.cn id=209 lang=javascript
 * @lcpr version=30005
 *
 * [209] 长度最小的子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0, right = 0
  let windowSum = 0
  let res = Infinity
  while (right < nums.length) {
    const cur = nums[right]
    right++
    windowSum += cur
    while (windowSum >= target && left < right) {
      res = Math.min(res, right - left)
      const del = nums[left]
      windowSum -= del
      left++
    }
  }
  return res === Infinity ? 0 : res
};
// @lc code=end



/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

