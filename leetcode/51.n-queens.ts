/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
    const res: string[][] = []
    const board = new Array(n)  // js初始化二维数组不能直接用fill一个数组，会导致每个子数组指向同一个引用
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }
    const isValid = (board: string[][], row: number, col: number) => {
        const n = board.length
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

    const backtrack = (board: string[][], row: number) => {
        if (row === board.length) {
            res.push(board.map(item => item.join('')))
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

