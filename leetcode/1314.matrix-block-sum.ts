/*
 * @lc app=leetcode id=1314 lang=typescript
 *
 * [1314] Matrix Block Sum
 */

// @lc code=start
function matrixBlockSum(mat: number[][], k: number): number[][] {
    const m = mat.length, n = mat[0].length
    let preSum = new Array(m + 1).fill(null).map(item => new Array(n + 1).fill(0))
    preSum[0][0] = 0
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] + mat[i - 1][j - 1] - preSum[i - 1][j - 1]
        }
    }

    const res: number[][] = new Array(m).fill(null).map(item => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const row1 = i - k > 0 ? i - k : 0, row2 = i + k < m - 1 ? i + k : m - 1, col1 = j - k > 0 ? j - k : 0, col2 = j + k < n - 1 ? j + k : n - 1
            // console.log(row1, col1, row2, col2)
            res[i][j] = preSum[row2 + 1][col2 + 1] - preSum[row1][col2 + 1] - preSum[row2 + 1][col1] + preSum[row1][col1]
        }
    }
    return res
};
// console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1))
// @lc code=end

