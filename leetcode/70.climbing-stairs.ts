/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    const f: number[] = []
    f[1] = 1
    f[2] = 2
    for (let i = 3; i < n + 1; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
};
// @lc code=end

