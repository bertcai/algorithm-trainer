/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    // let max = 0;
    // const sarr = s.split('');
    // let temp = [] as string[];
    // for (let i = 0; i < sarr.length; i++) {
    //     if(temp.includes(sarr[i])) {
    //         max = Math.max(max, temp.length);
    //         temp = temp.slice(temp.indexOf(sarr[i]) + 1)
    //     }
    //     temp.push(sarr[i]);
    // }
    // return Math.max(max, temp.length);

    // better solution
    let max = 0;
    let window = new Set();
    let left = 0;
    let right = 0;
    while (right < s.length) {
        const char = s[right];
        while (window.has(char)) {
            window.delete(s[left]);
            left++;
        }
        window.add(char);
        max = Math.max(max, window.size);
        right++;
    }
    return max;
};
// @lc code=end

