/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 * @lcpr version=30005
 *
 * [1658] 将 x 减到 0 的最小操作数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  if(sum < x) return -1
  const target = sum - x
  let left = 0, right = 0
  let res = Infinity
  let window = {
    arr: [],
    sum: 0
  }
  while (right < nums.length) {
    let c = nums[right]
    right++
    window.arr.push(c)
    window.sum += c
    // console.log(window, c, target)
    while (window.sum > target) {
      const d = nums[left]
      left++
      window.arr.shift()
      window.sum -= d
      // console.log(window, d)
    }
    if (window.sum === target) {
      res = Math.min(nums.length - window.arr.length, res)
    }
  }
  return res === Infinity ? -1 : res
};
// @lc code=end



/*
// @lcpr case=start
// [5,2,3,1,1]\n5\n
// @lcpr case=end

// @lcpr case=start
// [5,6,7,8,9]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,20,1,1,3]\n10\n
// @lcpr case=end

 */

