/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    const res: number[][] = []
    const track: number[] = []
    nums = nums.sort()

    const backtrack = (start) => {
        res.push([...track])

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue
            track.push(nums[i])
            backtrack(i + 1)
            track.pop()
        }
    }

    backtrack(0)
    return res
};
// @lc code=end

