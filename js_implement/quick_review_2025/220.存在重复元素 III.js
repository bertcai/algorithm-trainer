/*
 * @lc app=leetcode.cn id=220 lang=javascript
 * @lcpr version=30005
 *
 * [220] 存在重复元素 III
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let window = new Map()
  let left = 0, right = 0
  while (right < nums.length) {
    let num = nums[right]
    let bucket = Math.floor(num / (valueDiff + 1))
    if (window.has(bucket)) {
      return true
    }

    if (window.has(bucket - 1) && Math.abs(num - window.get(bucket - 1)) <= valueDiff) {
      return true
    }
    if (window.has(bucket + 1) && Math.abs(num - window.get(bucket + 1)) <= valueDiff) {
      return true
    }
    window.set(bucket, num)
    right++
    if (right - left > indexDiff) {
      window.delete(Math.floor(nums[left] / (valueDiff + 1)))
      left++
    }
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n0\n
// @lcpr case=end

// @lcpr case=start
// [1,5,9,1,5,9]\n2\n3\n
// @lcpr case=end

 */

