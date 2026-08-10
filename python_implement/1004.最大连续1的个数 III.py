#
# @lc app=leetcode.cn id=1004 lang=python3
# @lcpr version=30404
#
# [1004] 最大连续1的个数 III
#

# @lc code=start
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        right = 0
        window = 0
        need = k
        res = -1
        while right < len(nums):
            c = nums[right]
            right+=1
            if c == 0:
                window+=1
            while window > need and left<right:
                d = nums[left]
                left+=1
                if d == 0:
                    window-=1
            if window<=need:
                res = max(res, right-left)
        return res
# @lc code=end



#
# @lcpr case=start
# [1,1,1,0,0,0,1,1,1,1,0]\n2\n
# @lcpr case=end

# @lcpr case=start
# [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3\n
# @lcpr case=end

#

