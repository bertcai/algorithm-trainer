/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    // 求能使dp[i][j] 为 true 时 j-i 的最大差值
    // 状态转移方程 dp[i][j] = dp[i+1][j-1] && s[i] === s[j] 
    let dp: boolean[][] = []
    const len = s.length
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }
    let st = 0, end = 0;

    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true
            st = i;
            end = i + 1
        }
    }

    for (let n = 3; n <= len; n++) {
        for (let i = 0; i <= len - n; i++) {
            let j = i + n - 1
            if (dp[i + 1][j - 1]) {
                if (s[i] === s[j]) {
                    dp[i][j] = true
                    st = i;
                    end = j;
                }
            }
        }
    }
    return s.substring(st, end + 1)
};
// @lc code=end

