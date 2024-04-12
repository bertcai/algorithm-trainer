/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let cur1 = m - 1
    let cur2 = n - 1
    let last = m + n - 1
    while (cur1 >= 0 && cur2 >= 0) {
        if (nums1[cur1] > nums2[cur2]) {
            nums1[last] = nums1[cur1]
            last--
            cur1--
        } else {
            nums1[last] = nums2[cur2]
            last--
            cur2--
        }
    }
    while (cur2 >= 0) {
        nums1[last] = nums2[cur2]
        last--
        cur2--
    }
};
// @lc code=end

