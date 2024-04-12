/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for (let i = 0; i < n; i++) {
        let p = 0, q = n - 1
        while (p <= q) {
            [matrix[i][p], matrix[i][q]] = [matrix[i][q], matrix[i][p]]
            p++
            q--
        }
    }
};
// @lc code=end

