/*
 * @lc app=leetcode id=52 lang=typescript
 *
 * [52] N-Queens II
 */

// @lc code=start
function totalNQueens(n: number): number {
    let res = 0
    const board = new Array(n)
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }
    const isValid = (board, row, col) => {
        let n = board.length
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') return false
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false
        }
        return true
    }

    const backtrack = (board, row) => {
        if (row === board.length) {
            res++
            return
        }
        for (let col = 0; col < board.length; col++) {
            if (!isValid(board, row, col)) continue
            board[row][col] = 'Q'
            backtrack(board, row + 1)
            board[row][col] = '.'
        }
    }
    backtrack(board, 0)
    return res
};
// @lc code=end

