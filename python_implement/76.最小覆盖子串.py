#
# @lc app=leetcode.cn id=76 lang=python3
# @lcpr version=30404
#
# [76] 最小覆盖子串
#

# @lc code=start
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        left = 0
        right = 0
        n = len(s)
        need = {}
        window = {}
        length = float('inf')
        res = (0, 0)
        valid = 0
        for c in t:
            need[c] = need.get(c, 0)+1
        while right < n:
            c = s[right]
            right+=1
            if c in need:
                window[c] = window.get(c,0)+1
                if window[c] == need[c]:
                    valid+=1
            while valid == len(need):
                if right-left < length:
                    res = (left,right)
                    length = right-left
                d = s[left]
                left+=1
                if d in need:
                    if window[d] == need[d]:
                        valid-=1
                    window[d]-=1
        return "" if length == float('inf') else s[res[0]:res[1]]
                
                
                
            
# @lc code=end



#
# @lcpr case=start
# "ADOBECODEBANC"\n"ABC"\n
# @lcpr case=end

# @lcpr case=start
# "a"\n"a"\n
# @lcpr case=end

# @lcpr case=start
# "a"\n"aa"\n
# @lcpr case=end

#

