/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
    const n = nums.length
    const preSum: number[] = []
    preSum[0] = 0
    nums.forEach((v, i) => {
        preSum[i + 1] = preSum[i] + v
    })
    let map = new Map()
    let res = 0
    for (let i = 0; i < preSum.length; i++) {
        let need = preSum[i] - k
        if (map.has(need)) {
            res += map.get(need)
        }
        if (!map.has(preSum[i])) {
            map.set(preSum[i], 1)
        } else {
            map.set(preSum[i], map.get(preSum[i]) + 1)
        }
    }
    return res
};

// @lc code=end