#
# @lc app=leetcode.cn id=3 lang=python3
# @lcpr version=30404
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        window = {}
        left = 0
        right = 0
        res = 0
        n = len(s)
        while right < n:
            c = s[right]
            right+=1
            window[c] = window.get(c,0)+1   
            while left < right and window[c]>1:
                d = s[left]
                left+=1
                window[d]-=1
            res = max(res, right-left)
        return res
                
                
# @lc code=end



#
# @lcpr case=start
# "abcabcbb"\n
# @lcpr case=end

# @lcpr case=start
# "bbbbb"\n
# @lcpr case=end

# @lcpr case=start
# "pwwkew"\n
# @lcpr case=end

#

