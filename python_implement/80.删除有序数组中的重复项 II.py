#
# @lc app=leetcode.cn id=80 lang=python3
# @lcpr version=30404
#
# [80] 删除有序数组中的重复项 II
#

# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)
        slow = 0
        fast = 1
        while fast < n:
            if nums[fast] == nums[slow]:
                if slow > 0 and nums[slow] == nums[slow - 1]:
                    fast += 1
                else:
                    slow += 1
                    nums[slow] = nums[fast]
                    fast += 1
            else:
                slow += 1
                nums[slow] = nums[fast]
                fast += 1
        return slow + 1
# @lc code=end



#
# @lcpr case=start
# [1,1,1,2,2,3]\n
# @lcpr case=end

# @lcpr case=start
# [0,0,1,1,1,1,2,3,3]\n
# @lcpr case=end

#

