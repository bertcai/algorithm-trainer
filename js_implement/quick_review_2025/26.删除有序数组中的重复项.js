/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30005
 *
 * [26] 删除有序数组中的重复项
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1
  let slow = 0, fast = 1, repeat = false
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      count++
      slow++
      if (repeat) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      }
      fast++
    } else {
      repeat = true
      fast++
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

