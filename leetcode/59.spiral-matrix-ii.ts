/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    let l = 0, u = 0, r = n - 1, d = n - 1
    const res: number[][] = new Array(n).fill(0).map(item => new Array(n).fill(0))
    let count = 0
    while (count < n * n) {
        if (u <= d) {
            for (let j = l; j <= r; j++) {
                count++
                res[u][j] = count
            }
            u++
        }
        if (l <= r) {
            for (let i = u; i <= d; i++) {
                count++
                res[i][r] = count
            }
            r--
        }
        if (u <= d) {
            for (let j = r; j >= l; j--) {
                count++
                res[d][j] = count
            }
            d--
        }
        if (l <= r) {
            for (let i = d; i >= u; i--) {
                count++
                res[i][l] = count
            }
            l++
        }
    }
    return res
};
// console.log(generateMatrix(3))
// @lc code=end

