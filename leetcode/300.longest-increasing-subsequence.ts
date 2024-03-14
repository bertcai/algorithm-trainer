/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    const len = nums.length
    if (!len) {
        return len
    }
    let max = 1
    const resarr = new Array(len).fill(1)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                resarr[i] = Math.max(resarr[i], resarr[j] + 1)
            }
        }
        max = Math.max(max, resarr[i])
    }
    return max
};
// @lc code=end

