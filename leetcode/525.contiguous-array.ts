/*
 * @lc app=leetcode id=525 lang=typescript
 *
 * [525] Contiguous Array
 */

// @lc code=start
function findMaxLength(nums: number[]): number {
    let res = 0
    const presum: number[] = []
    const map = new Map()
    presum[0] = 0
    nums.forEach((v, i) => {
        presum[i + 1] = presum[i] + (v ? 1 : -1)
    })

    for (let i = 0; i < presum.length; i++) {
        if (!map.has(presum[i])) {
            map.set(presum[i], i)
        } else {
            res = Math.max(res, i - map.get(presum[i]))
        }
    }
    return res
};
// console.log(findMaxLength([0, 1]))
// @lc code=end

