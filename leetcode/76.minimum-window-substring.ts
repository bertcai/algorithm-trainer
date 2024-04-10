/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    const window = new Map()
    const need = new Map()
    let start = 0, min = s.length + 1
    t.split('').forEach((item) => {
        if (need.has(item)) {
            need.set(item, need.get(item) + 1)
        } else {
            need.set(item, 1)
        }
    })
    let left = 0, right = 0
    let valid = 0
    while (right < s.length) {
        let c = s[right]
        if (need.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1)
            } else {
                window.set(c, 1)
            }
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        right++
        while (left < right && valid === need.size) {
            if (min > right - left) {
                min = right - left
                start = left
            }
            let delC = s[left]
            left++
            if (need.has(delC)) {
                if (window.get(delC) === need.get(delC)) {
                    valid--
                }
                window.set(delC, window.get(delC) - 1)
            }
        }
    }
    return min === s.length + 1 ? '' : s.substring(start, start + min)
};
// @lc code=end

