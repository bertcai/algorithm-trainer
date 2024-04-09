/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    const track: number[] = []
    let trackSum = 0

    const backtrack = (start) => {
        if (trackSum === target) {
            res.push([...track])
            return
        }
        if (trackSum > target) {
            return
        }

        // for (let i = 0; i < candidates.length; i++) {
        //     if (candidates[i] < track[track.length - 1]) continue
        //     trackSum += candidates[i]
        //     track.push(candidates[i])
        //     backtrack(i + 1)
        //     trackSum -= candidates[i]
        //     track.pop()
        // }
        for (let i = start; i < candidates.length; i++) {
            trackSum += candidates[i]
            track.push(candidates[i])
            backtrack(i)
            trackSum -= candidates[i]
            track.pop()
        }
    }
    backtrack(0)
    return res
};
// @lc code=end

