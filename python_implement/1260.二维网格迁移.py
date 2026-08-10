#
# @lc app=leetcode.cn id=1260 lang=python3
# @lcpr version=30404
#
# [1260] 二维网格迁移
#

# @lc code=start
class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m = len(grid)
        n = len(grid[0])
        total = m * n
        k %= total

        temp = [-2000] * total
        cur = 0
        cur = 0
        for i in range(m):
            for j in range(n):
                temp[cur] = grid[i][j]
                cur+=1
        right = temp[0:m*n-k]
        left = temp[m*n-k: m*n]
        temp = left+right
        cur = 0
        for i in range(m):
            for j in range(n):
                grid[i][j] = temp[cur]
                cur+=1
        return grid
                
# @lc code=end



#
# @lcpr case=start
# [[1,2,3],[4,5,6],[7,8,9]]\n1\n
# @lcpr case=end

# @lcpr case=start
# [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]\n4\n
# @lcpr case=end

# @lcpr case=start
# [[1,2,3],[4,5,6],[7,8,9]]\n9\n
# @lcpr case=end

#

