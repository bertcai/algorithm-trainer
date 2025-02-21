/*
 * @lc app=leetcode.cn id=303 lang=javascript
 * @lcpr version=30005
 *
 * [303] 区域和检索 - 数组不可变
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
  this.presumArr = [0]
  let presum = 0
  for (let i = 0; i < nums.length; i++) {
    presum += nums[i]
    this.presumArr.push(presum)
  }
  console.log(this.presumArr)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.presumArr[right + 1] - this.presumArr[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end



/*
// @lcpr case=start
// ["NumArray", "sumRange", "sumRange", "sumRange"][[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]\n
// @lcpr case=end

 */

