/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30005
 *
 * [88] 合并两个有序数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1, p = m + n - 1
  while (p >= 0 && p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
      p--
    } else {
      nums1[p] = nums2[p2]
      p2--
      p--
    }
  }
  while (p1 >= 0) {
    nums1[p] = nums1[p1]
    p1--
    p--
  }
  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */

