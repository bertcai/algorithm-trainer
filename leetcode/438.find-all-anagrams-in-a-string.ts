/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    const need = new Map()
    const window = new Map()
    p.split('').forEach(c => {
        need.set(c, (need.get(c) || 0) + 1)
    })

    let left = 0, right = 0
    const res: number[] = []
    let valid = 0
    while (right < s.length) {
        const c = s[right]
        right++
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if (need.get(c) === window.get(c)) {
                valid++
            }
        }
        while (right - left > p.length) {
            const d = s[left]
            left++
            if (need.has(d)) {
                if (need.get(d) === window.get(d)) valid--
                window.set(d, window.get(d) - 1)
            }
        }
        if (valid === need.size) {
            res.push(left)
            // console.log(s.substring(left, right))
        }
    }
    return res
};
// @lc code=end

