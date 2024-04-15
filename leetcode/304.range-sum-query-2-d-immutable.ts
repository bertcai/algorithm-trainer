/*
 * @lc app=leetcode id=304 lang=typescript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
class NumMatrix {
    matrix: number[][]
    preSum: number[][]
    constructor(matrix: number[][]) {
        this.matrix = matrix
        let m = matrix.length
        let n = matrix[0].length
        if (m === 0 || n === 0) return
        this.preSum = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] + matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

