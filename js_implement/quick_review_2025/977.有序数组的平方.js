/*
 * @lc app=leetcode.cn id=977 lang=javascript
 * @lcpr version=30005
 *
 * [977] 有序数组的平方
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let nums1 = nums.filter(n => n < 0).reverse().map(a => a * a)
  let nums2 = nums.filter(n => n >= 0).map(a => a * a)
  const res = []
  let p1 = 0, p2 = 0
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      res.push(nums1[p1])
      p1++
    } else {
      res.push(nums2[p2])
      p2++
    }
  }
  while (p1 < nums1.length) {
    res.push(nums1[p1])
    p1++
  }
  while (p2 < nums2.length) {
    res.push(nums2[p2])
    p2++
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [-4,-1,0,3,10]\n
// @lcpr case=end

// @lcpr case=start
// [-7,-3,2,3,11]\n
// @lcpr case=end

 */

