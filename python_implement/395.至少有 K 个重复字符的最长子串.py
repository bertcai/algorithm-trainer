#
# @lc app=leetcode.cn id=395 lang=python3
# @lcpr version=30404
#
# [395] 至少有 K 个重复字符的最长子串
#

# @lc code=start
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        length = 0
        for i in range(1,27):
            length = max(length, self.longestKLetterSubstr(s,k,i))
        return length
    
    def longestKLetterSubstr(self, s,k,count):
        res = 0
        left,right = 0,0
        windowCount = [0]*26
        windowUniqueCount = 0
        windowValidCount = 0
        while right < len(s):
            c = s[right]
            od = ord(c) - ord('a')
            if windowCount[od] ==0:
                windowUniqueCount+=1
            windowCount[od]+=1
            if windowCount[od] == k:
                windowValidCount+=1      
            right+=1
            
            while windowUniqueCount > count:
                d = s[left]
                od = ord(d) - ord('a')
                if windowCount[od] == k:
                    windowValidCount-=1
                windowCount[od]-=1
                if windowCount[od] == 0:
                    windowUniqueCount-=1
                left+=1
            if windowValidCount == count:
                res = max(res, right-left)
        return res
            
            
        
# @lc code=end



#
# @lcpr case=start
# "aaabb"\n3\n
# @lcpr case=end

# @lcpr case=start
# "ababbc"\n2\n
# @lcpr case=end

#

