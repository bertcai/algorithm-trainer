/*
 * @lc app=leetcode id=1124 lang=typescript
 *
 * [1124] Longest Well-Performing Interval
 */

// @lc code=start
function longestWPI(hours: number[]): number {
    hours = hours.map(item => item > 8 ? 1 : -1)
    let res = 0
    const presum: number[] = []
    presum[0] = 0
    hours.forEach((v, i) => {
        presum[i + 1] = presum[i] + v
    })
    const map = new Map()
    for (let i = 0; i < presum.length; i++) {
        if (!map.has(presum[i])) {
            map.set(presum[i], i)
        }
        if (presum[i] > 0) {
            res = Math.max(res, i)
        } else {
            if (map.has(presum[i] - 1)) {
                let j = map.get(presum[i] - 1)
                res = Math.max(res, i - j)
            }
        }
    }
    return res
};
// @lc code=end

