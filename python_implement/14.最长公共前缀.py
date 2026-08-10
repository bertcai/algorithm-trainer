#
# @lc app=leetcode.cn id=14 lang=python3
# @lcpr version=30404
#
# [14] 最长公共前缀
#

# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = ""
        minlen = min([len(s) for s in strs])
        for i in range(minlen):
            c = strs[0][i]
            for s in strs:
                if s[i] != c:
                    return res
            res+=c
        return res
# @lc code=end



#
# @lcpr case=start
# ["flower","flow","flight"]\n
# @lcpr case=end

# @lcpr case=start
# ["dog","racecar","car"]\n
# @lcpr case=end

#

