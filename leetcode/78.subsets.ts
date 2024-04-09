/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const res: number[][] = []
    const track: number[] = []

    // const backtrack = (start) => {
    //     res.push([...track])
    //     for (let i = start; i < nums.length; i++) {
    //         track.push(nums[i])
    //         backtrack(i + 1)
    //         track.pop()
    //     }
    // }

    const backtrack = (i) => {
        if (i == nums.length) {
            res.push([...track]);
            return;
        }
        track.push(nums[i])
        backtrack(i + 1)
        track.pop()

        backtrack(i + 1)
    }

    backtrack(0)
    return res
};
// @lc code=end

