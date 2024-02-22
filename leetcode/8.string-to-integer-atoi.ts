/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const reg = new RegExp(/\s*([-\+]?[0-9]*).*/)
    const max = Math.pow(2, 31) - 1
    const min = -Math.pow(2, 31)

    const group = s.match(reg)
    if (group) {
        let result = Number(group[1])
        if (!result) {
            return 0
        }
        if (result > max) return max
        if (result < min) return min
        return result
    } else {
        return 0
    }
};
// @lc code=end

