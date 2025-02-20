/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30005
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findLeft = (nums, target) => {
    let left = 0, right = nums.length - 1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] === target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    if (left < 0 || left >= nums.length) {
      return -1
    }
    return nums[left] === target ? left : -1
  }

  const findRight = (nums, target) => {
    let left = 0, right = nums.length - 1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] === target) {
        left = mid + 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    if (right < 0 || right >= nums.length) {
      return -1
    }
    return nums[right] === target ? right : -1
  }
  return [findLeft(nums, target), findRight(nums, target)]
};
// @lc code=end



/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

