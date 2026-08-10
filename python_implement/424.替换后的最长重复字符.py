#
# @lc app=leetcode.cn id=424 lang=python3
# @lcpr version=30404
#
# [424] 替换后的最长重复字符
#

# @lc code=start
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        right = 0
        # 统计窗口中每个字符的出现次数
        windowCharCount = [0] * 26
        # 记录窗口中字符的最多重复次数
        # 记录这个值的意义在于，最划算的替换方法肯定是把其他字符替换成出现次数最多的那个字符
        windowMaxCount = 0
        # 记录结果长度
        res = 0

        # 开始滑动窗口模板
        while right < len(s):
            # 扩大窗口
            c = ord(s[right]) - ord('A')
            windowCharCount[c] += 1
            windowMaxCount = max(windowMaxCount, windowCharCount[c])
            right += 1

            # 这个 while 换成 if 也可以
            while right - left - windowMaxCount > k:
                # 杂牌字符数量 right - left - windowMaxCount 多于 k
                # 此时，k 次替换已经无法把窗口内的字符都替换成相同字符了
                # 必须缩小窗口
                windowCharCount[ord(s[left]) - ord('A')] -= 1
                left += 1
            # 经过收缩后，此时一定是一个合法的窗口
            res = max(res, right - left)

        return res
# @lc code=end



#
# @lcpr case=start
# "ABAB"\n2\n
# @lcpr case=end

# @lcpr case=start
# "AABABBA"\n1\n
# @lcpr case=end

#

