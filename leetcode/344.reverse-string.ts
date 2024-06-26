/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let start = 0, end = s.length - 1
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
    }
};
// @lc code=end

