#
# @lc app=leetcode.cn id=219 lang=python3
# @lcpr version=30404
#
# [219] 存在重复元素 II
#

# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        window = {}
        left = 0
        right = 0
        n = len(nums)
        min_l = n+1
        valid = False
        while right < n:
            c = str(nums[right])
            window[c] = window.get(c,0)+1
            if window[c] == 2:
                valid = True
            while valid == True:
                min_l = min(min_l, right-left)
                d = str(nums[left])
                left+=1
                if window[d] == 2:
                    valid = False
                window[d]-=1
        print(min_l)
        return min_l <=k
# @lc code=end



#
# @lcpr case=start
# [1,2,3,1]\n3\n
# @lcpr case=end

# @lcpr case=start
# [1,0,1,1]\n1\n
# @lcpr case=end

# @lcpr case=start
# [1,2,3,1,2,3]\n2\n
# @lcpr case=end

#

