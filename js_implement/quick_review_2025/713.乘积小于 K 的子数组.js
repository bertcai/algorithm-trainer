/*
 * @lc app=leetcode.cn id=713 lang=javascript
 * @lcpr version=30005
 *
 * [713] 乘积小于 K 的子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0, right = 0
  let windowProduct = 1
  let res = 0
  while (right < nums.length) {
    const c = nums[right]
    windowProduct = windowProduct * c
    right++
    while (windowProduct >= k) {
      const d = nums[left]
      windowProduct = windowProduct / d
      left++
    }
    if (windowProduct < k) {
      res += right - left
    }
  }
  return res > 0 ? res : 0
};
// @lc code=end



/*
// @lcpr case=start
// [10,5,2,6]\n100\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n0\n
// @lcpr case=end

 */

