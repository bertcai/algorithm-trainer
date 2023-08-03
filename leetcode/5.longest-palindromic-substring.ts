/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let dp: boolean[][] = [];
    let max: number = 0;
    let result: string = '';
    for (let i = 0; i < s.length; i++) {
        dp[i] = [];
        for (let j = 0; j < s.length; j++) {
            dp[i][j] = false;
        }
    }
    // 状态转移方程：dp[i][j] = dp[i - 1][j + 1] && s[i] === s[j]
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (i - j <= 2 || dp[i - 1][j + 1])) {
                dp[i][j] = true;
                if (i - j + 1 > max) {
                    max = i - j + 1;
                    result = s.substring(j, i + 1);
                }
            }
        }
    }
    return result;
};
// @lc code=end

