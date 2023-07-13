/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    const sarr = s.split('');
    let temp = [] as string[];
    for (let i = 0; i < sarr.length; i++) {
        if(temp.includes(sarr[i])) {
            max = Math.max(max, temp.length);
            temp = temp.slice(temp.indexOf(sarr[i]) + 1)
        }
        temp.push(sarr[i]);
    }
    return Math.max(max, temp.length);
};
// @lc code=end

