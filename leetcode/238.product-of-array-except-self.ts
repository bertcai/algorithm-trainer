/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    const prefix: number[] = []
    const suffix: number[] = []
    prefix[0] = 1
    suffix[n] = 1
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] * nums[i]
    }
    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i]
    }
    // console.log(prefix, suffix)
    return nums.map((_, index) => prefix[index] * suffix[index + 1])
};
// @lc code=end

