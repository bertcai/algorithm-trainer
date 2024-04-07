/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    const moveX = [0, 1, 0, -1]
    const moveY = [1, 0, -1, 0]

    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0
    }

    let count = 0
    let row = grid.length
    let column = grid[0].length

    const dfs = (grid, i, j) => {
        if (i < 0 || i >= row || j < 0 || j >= column || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        for (let k = 0; k < 4; k++) {
            dfs(grid, i + moveX[k], j + moveY[k])
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};
// @lc code=end

