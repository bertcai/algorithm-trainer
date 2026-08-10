#
# @lc app=leetcode.cn id=1658 lang=python3
# @lcpr version=30404
#
# [1658] 将 x 减到 0 的最小操作数
#

# @lc code=start
class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        n = len(nums)
        sum_ = sum(nums)
        target = sum_-x
        left = 0
        right = 0
        window_sum = 0
        max_len = -1
        while right<n:
            window_sum+=nums[right]
            right+=1
            
            while window_sum>target and left<right:
                window_sum-=nums[left]
                left+=1
            if window_sum == target:
                max_len = max(max_len,right-left)
        return -1 if max_len == -1 else n-max_len
        
# @lc code=end



#
# @lcpr case=start
# [1,1,4,2,3]\n5\n
# @lcpr case=end

# @lcpr case=start
# [5,6,7,8,9]\n4\n
# @lcpr case=end

# @lcpr case=start
# [3,2,20,1,1,3]\n10\n
# @lcpr case=end

#

