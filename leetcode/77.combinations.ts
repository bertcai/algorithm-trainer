/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    const res: number[][] = []
    const subset: number[] = []

    dfs(1)
    function dfs(nth) {
        if (subset.length === k) {
            res.push(subset.slice())
            return
        }
        for (let i = nth; i <= n; i++) {
            subset.push(i)
            dfs(i + 1)
            subset.pop()
        }
    }
    return res
};
// @lc code=end

