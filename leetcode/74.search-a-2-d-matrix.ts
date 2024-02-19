/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let x = 0;
    let y = matrix[0].length - 1;
    while(x < matrix.length && y >= 0) {
        if(matrix[x][y] === target) {
            return true;
        } else if(matrix[x][y] > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};
// @lc code=end

