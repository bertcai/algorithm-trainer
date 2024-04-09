/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    const track: number[] = []
    let curSum = 0
    candidates = candidates.sort()

    const backtrack = (start) => {
        if (curSum === target) {
            res.push([...track])
            return
        }
        if (curSum > target) return
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue
            curSum += candidates[i]
            track.push(candidates[i])
            backtrack(i + 1)
            curSum -= candidates[i]
            track.pop()
        }
    }
    backtrack(0)
    return res
};
// @lc code=end

