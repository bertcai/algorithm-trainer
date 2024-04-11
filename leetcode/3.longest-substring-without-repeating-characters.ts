/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const window = {}
    let left = 0, right = 0
    let max = 0
    while (right < s.length) {
        let c = s[right]
        right++
        if (window[c] !== undefined) {
            window[c]++
        } else {
            window[c] = 1
        }
        while (window[c] > 1) {
            let d = s[left]
            window[d]--
            left++
        }
        max = Math.max(max, right - left)
    }
    return max
};
// @lc code=end

