/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const len = nums.length
    const res: number[][] = []
    const subset: number[] = []
    dfs(0)

    function dfs(nth) {
        res.push(subset.slice())

        for (let i = nth; i < len; i++) {
            subset.push(nums[i])
            dfs(i + 1)
            subset.pop()
        }
    }
    return res
};
// @lc code=end

