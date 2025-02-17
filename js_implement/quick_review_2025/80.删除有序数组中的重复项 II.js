/*
 * @lc app=leetcode.cn id=80 lang=javascript
 * @lcpr version=30005
 *
 * [80] 删除有序数组中的重复项 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let slow = 0, fast = 0, count = 0
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    } else if (slow < fast && count < 2) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
    count++
    if (fast < nums.length && nums[fast] !== nums[fast - 1]) {
      count = 0
    }
  }
  return slow + 1
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,1,2,3,3]\n
// @lcpr case=end

 */

