/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let res: number[][] = []
    let track = []
    let used = new Array(nums.length).fill(false)

    const backtrack = (nums, track, used) => {
        if (track.length === nums.length) {
            res.push([...track]) // push一个拷贝，否则track最后会pop成一个空数组
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }
            track.push(nums[i])
            used[i] = true
            backtrack(nums, track, used)
            track.pop()
            used[i] = false
        }
    }

    backtrack(nums, track, used)
    return res
};
// @lc code=end

