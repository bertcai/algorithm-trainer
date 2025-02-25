/*
 * @lc app=leetcode.cn id=503 lang=javascript
 * @lcpr version=30005
 *
 * [503] 下一个更大元素 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length
  let res = []
  const s = []
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (s.length && s[s.length - 1] <= nums[i % n]) {
      s.pop()
    }
    res[i % n] = s.length ? s[s.length - 1] : -1
    s.push(nums[i % n])
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,3]\n
// @lcpr case=end

 */

