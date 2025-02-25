/*
 * @lc app=leetcode.cn id=496 lang=javascript
 * @lcpr version=30005
 *
 * [496] 下一个更大元素 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let s = []
  let great = {}
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (s.length && s[s.length - 1] <= nums2[i]) {
      s.pop()
    }
    great[nums2[i]] = s.length ? s[s.length - 1] : -1
    s.push(nums2[i])
  }
  const ans = []
  for (let i = 0; i < nums1.length; i++) {
    ans.push(great[nums1[i]])
  }
  return ans
};
// @lc code=end



/*
// @lcpr case=start
// [4,1,2]\n[1,3,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,4]\n[1,2,3,4].\n
// @lcpr case=end

 */

