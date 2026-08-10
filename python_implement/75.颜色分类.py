#
# @lc app=leetcode.cn id=75 lang=python3
# @lcpr version=30404
#
# [75] 颜色分类
#

# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        r = 0
        n = len(nums)
        b = n-1
        cur = 0
        while cur <= b:
            if nums[cur] ==0:
                self.swap(nums,r,cur)
                r+=1
            elif nums[cur] == 2:
                self.swap(nums, b, cur)
                b-=1
            elif nums[cur] == 1:
                cur+=1
            if cur < r:
                cur = r
    def swap(self, nums,i,j):
        nums[i],nums[j] = nums[j],nums[i]
        
        
# @lc code=end



#
# @lcpr case=start
# [2,0,2,1,1,0]\n
# @lcpr case=end

# @lcpr case=start
# [2,0,1]\n
# @lcpr case=end

#

