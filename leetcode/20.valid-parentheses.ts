/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let map = {
        "{": "}",
        "(": ")",
        "[": "]",
    }

    let stack: String[] = []
    let len = s.length
    for (let i = 0; i < len; i++) {
        const ch = s[i]
        if ('({['.includes(ch)) {
            stack.push(map[ch])
        } else {
            if (ch !== stack.pop()) {
                return false
            }
        }
    }
    if (stack.length) return false
    return true
};
// @lc code=end

