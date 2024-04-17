/*
 * @lc app=leetcode id=523 lang=typescript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
function checkSubarraySum(nums: number[], k: number): boolean {
    const presum: number[] = []
    presum[0] = 0
    const n = nums.length
    nums.forEach((v, i) => {
        presum[i + 1] = (presum[i] + v) % k
    })
    const map = new Map()

    for (let i = 0; i < n + 1; i++) {
        if (map.has(presum[i])) {
            if (i - map.get(presum[i]) >= 2)
                return true
        } else {
            map.set(presum[i], i)
        }
    }
    return false
};
// @lc code=end

