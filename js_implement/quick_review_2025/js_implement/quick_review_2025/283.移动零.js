/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30005
 *
 * [283] 移动零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0, fast = 0, last = nums.length - 1
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
      fast++
    } else {
      fast++
    }
  }
  while(slow < nums.length){
    nums[slow] = 0
    slow++
  }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

