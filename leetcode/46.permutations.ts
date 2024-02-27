/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    const len = nums.length
    const curArr: number[] = []
    const res: number[][] = []
    const visited = {}

    function dfs(nth) {
        if (nth === len) {
            res.push(curArr.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (!visited[nums[i]]) {
                visited[nums[i]] = 1
                curArr.push(nums[i])
                dfs(nth + 1)
                curArr.pop()
                visited[nums[i]] = 0
            }
        }
    }
    dfs(0)
    return res
};
// @lc code=end

