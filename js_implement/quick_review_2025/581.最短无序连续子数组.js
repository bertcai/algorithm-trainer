/*
 * @lc app=leetcode.cn id=581 lang=javascript
 * @lcpr version=30005
 *
 * [581] 最短无序连续子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sortArr = nums.slice().sort((a, b) => a - b)
  let left = Infinity, right = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortArr[i]) {
      left = i
      break
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== sortArr[i]) {
      right = i
      break
    }
  }
  if (left === Infinity && right === -Infinity) return 0
  return right - left + 1
};
// @lc code=end



/*
// @lcpr case=start
// [2,6,4,8,10,9,15]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

