/*
 * @lc app=leetcode.cn id=75 lang=javascript
 * @lcpr version=30005
 *
 * [75] 颜色分类
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = 0, blue = nums.length - 1
  let p = 0
  while (p <= blue) {
    if (nums[p] === 0) {
      [nums[p], nums[red]] = [nums[red], nums[p]]
      red++
    } else if (nums[p] === 2) {
      [nums[p], nums[blue]] = [nums[blue], nums[p]]
      blue--
    } else {
      p++
    }
    if (p < red) {
      p = red
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [2,0,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,0,1]\n
// @lcpr case=end

 */

