#
# @lc app=leetcode.cn id=713 lang=python3
# @lcpr version=30404
#
# [713] 乘积小于 K 的子数组
#

# @lc code=start
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        left = 0
        right = 0
        res = 0
        cur = 1
        while right < len(nums):
            cur*=nums[right]
            right+=1
            while cur >= k and left < right:
                cur//=nums[left]
                left+=1
            res+=right-left
        return res
# @lc code=end



#
# @lcpr case=start
# [10,5,2,6]\n100\n
# @lcpr case=end

# @lcpr case=start
# [542, 433, 935, 193, 280, 849, 122, 107, 688, 913, 31, 311, 814, 507, 596, 109, 340, 981, 662, 145, 955, 692, 659, 46, 276, 734, 177, 727, 329, 320, 93, 78, 451, 129, 226, 491, 595, 175, 894, 662, 699, 871, 340, 375, 98, 38, 414, 306, 20, 548, 459, 577, 626, 942, 92, 322, 665, 497, 593, 877, 247, 487, 67, 320, 78, 775, 431, 193, 175, 957, 926, 816, 776, 967, 600, 114, 474, 810, 513, 43, 586, 559, 880, 540, 122, 95, 408, 621, 850, 598]\n425740\n
# @lcpr case=end

#

