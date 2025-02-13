/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30005
 *
 * [373] 查找和最小的 K 对数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const length1 = nums1.length
  const length2 = nums2.length
  const minPQ = new PriorityQueue({
    compare: (a, b) => a[0] + a[1] < b[0] + b[1] ? -1 : 1
  })
  for (let i = 0; i < length1; i++) {
    // console.log([nums1[i], nums2[0], i, 0])
    minPQ.enqueue([nums1[i], nums2[0], i, 0])
  }
  let p = 0
  const res = []
  while (!minPQ.isEmpty() && p < k) {
    const tuple = minPQ.dequeue()
    // console.log('de', tuple)
    const i = tuple[2]
    const j = tuple[3]
    res.push([tuple[0], tuple[1]])
    if (j + 1 < length2) {
      minPQ.enqueue([nums1[i], nums2[j + 1], i, j + 1])
      // console.log('en', [nums1[i], nums2[j + 1], i, j + 1])
    }
    p++
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */

