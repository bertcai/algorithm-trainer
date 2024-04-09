/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = []
    const track: number[] = []
    const used = new Array(nums.length).fill(false)

    nums = nums.sort()

    const backtrack = (start) => {
        if (track.length === nums.length) {
            res.push([...track])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            track.push(nums[i])
            used[i] = true
            backtrack(i + 1)
            track.pop()
            used[i] = false
        }
    }

    backtrack(0)
    return res
};
// @lc code=end

