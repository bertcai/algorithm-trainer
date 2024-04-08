/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const palindrome = (s, l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        return s.substring(l + 1, r)
    }

    let res = ""
    for (let i = 0; i < s.length; i++) {
        let s1 = palindrome(s, i, i)
        let s2 = palindrome(s, i, i + 1)
        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }
    return res
};
// @lc code=end

