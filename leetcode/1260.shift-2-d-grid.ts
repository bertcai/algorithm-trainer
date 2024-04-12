/*
 * @lc app=leetcode id=1260 lang=typescript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
    const col = grid.length
    const row = grid[0].length
    k = k % (col * row)
    const res: number[] = []
    grid.forEach(subarr => subarr.forEach(item => res.push(item)))
    let count = 0
    let origin = [...res]
    for (let i = k; i < res.length; i++) {
        res[i] = origin[count]
        count++
    }
    for (let i = 0; i < k; i++) {
        res[i] = origin[count]
        count++
    }
    let res2: number[][] = []
    for (let i = 0; i < col; i++) {
        res2[i] = []
        for (let j = 0; j < row; j++) {
            res2[i][j] = res[i * row + j]
        }
    }
    return res2
};
// @lc code=end

