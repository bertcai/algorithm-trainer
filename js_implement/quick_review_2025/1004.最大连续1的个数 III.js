/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 * @lcpr version=30005
 *
 * [1004] 最大连续1的个数 III
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let window = []
  let left = 0, right = 0
  let useK = 0, zeroNums = 0
  let res = 0
  while (right < nums.length) {
    let c = nums[right]
    right++
    window.push(c)
    if (c === 0) {
      useK++
      zeroNums++
    }
    // console.log(window)
    while (useK > k) {
      let d = nums[left]
      left++
      window.shift()
      if (d === 0) {
        useK--
        zeroNums--
      }
    }
    if (useK <= k) {
      res = Math.max(res, window.length)
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,1,0,0,0,1,1,1,1,0]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3\n
// @lcpr case=end

 */

