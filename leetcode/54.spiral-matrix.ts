/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    let m = matrix.length
    let n = matrix[0].length
    let r = n - 1
    let d = m - 1
    let l = 0
    let u = 0
    let res: number[] = []
    while (res.length < m * n) {
        if (u <= d) {
            for (let j = l; j <= r; j++) {
                res.push(matrix[u][j])
            }
            u++
        }
        if (l <= r) {
            for (let i = u; i <= d; i++) {
                res.push(matrix[i][r])
            }
            r--
        }
        if (u <= d) {
            for (let j = r; j >= l; j--) {
                res.push(matrix[d][j])
            }
            d--
        }
        if (l <= r) {
            for (let i = d; i >= u; i--) {
                res.push(matrix[i][l])
            }
            l++
        }
    }
    return res
};
// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// @lc code=end

