/*
 * @lc app=leetcode.cn id=219 lang=javascript
 * @lcpr version=30005
 *
 * [219] 存在重复元素 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let left = 0, right = 0
  let window = new Set()
  while (right < nums.length) {
    if (window.has(nums[right])) {
      return true
    }
    window.add(nums[right])
    right++
    while (right - left > k) {
      window.delete(nums[left])
      left++
    }
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */

