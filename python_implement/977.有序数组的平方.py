#
# @lc app=leetcode.cn id=977 lang=python3
# @lcpr version=30404
#
# [977] 有序数组的平方
#

# @lc code=start
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n =len(nums)
        i,j = 0, n-1
        p = n-1
        res = [0]*n
        while i <=j:
            if abs(nums[i])>abs(nums[j]):
                res[p] = nums[i]**2
                i+=1
            else:
                res[p] = nums[j]**2
                j-=1
            p-=1
        return res
# @lc code=end



#
# @lcpr case=start
# [-4,-1,0,3,10]\n
# @lcpr case=end

# @lcpr case=start
# [-7,-3,2,3,11]\n
# @lcpr case=end

#

