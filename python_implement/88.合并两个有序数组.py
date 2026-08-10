#
# @lc app=leetcode.cn id=88 lang=python3
# @lcpr version=30404
#
# [88] 合并两个有序数组
#

# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        p1 = m-1
        p2 = n-1
        cur = m+n-1
        while cur >=0 and p1>=0 and p2>=0:
            if nums1[p1] > nums2[p2]:
                nums1[cur] = nums1[p1]
                p1-=1
            else:
                nums1[cur] = nums2[p2]
                p2-=1
            cur-=1
        while cur >=0 and p1>=0:
            nums1[cur] = nums1[p1]
            p1-=1
            cur-=1
        while cur >=0 and p2>=0:
            nums1[cur] = nums2[p2]
            p2-=1
            cur-=1
                
# @lc code=end



#
# @lcpr case=start
# [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
# @lcpr case=end

# @lcpr case=start
# [1]\n1\n[]\n0\n
# @lcpr case=end

# @lcpr case=start
# [0]\n0\n[1]\n1\n
# @lcpr case=end

#

