/*
 * @lc app=leetcode id=974 lang=typescript
 *
 * [974] Subarray Sums Divisible by K
 */

// @lc code=start
function subarraysDivByK(nums: number[], k: number): number {
    const preSum: number[] = []
    preSum[0] = 0
    nums.forEach((v, i) => {
        preSum[i + 1] = preSum[i] + v
    })

    let res = 0
    const map = new Map()
    for (let i = 0; i < preSum.length; i++) {
        let temp = preSum[i] % k
        if (temp < 0) {
            temp += k
        }
        if (map.has(temp)) {
            res += map.get(temp)
            map.set(temp, map.get(temp) + 1)
        } else {
            map.set(temp, 1)
        }
    }
    return res
};
// @lc code=end

