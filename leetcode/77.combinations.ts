/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    const res: number[][] = []
    const track: number[] = []

    const backtrack = (start) => {
        if (track.length === k) {
            res.push([...track])
        }
        for (let i = start; i <= n; i++) {
            track.push(i)
            backtrack(i + 1)
            track.pop()
        }
    }
    backtrack(1)
    return res
};
// @lc code=end

