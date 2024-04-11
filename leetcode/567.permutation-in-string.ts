/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const need = new Map()
    s1.split('').forEach(char => {
        if (need.has(char)) {
            need.set(char, need.get(char) + 1)
        } else {
            need.set(char, 1)
        }
    })

    const window = new Map()
    let valid = 0
    let left = 0, right = 0

    while (right < s2.length) {
        const c = s2[right]
        right++
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        while (right - left > s1.length) {
            const d = s2[left]
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
        if (valid === need.size) {
            return true
        }
    }
    return false
};
// @lc code=end

