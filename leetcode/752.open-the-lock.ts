/*
 * @lc app=leetcode id=752 lang=typescript
 *
 * [752] Open the Lock
 */

// @lc code=start
function openLock(deadends: string[], target: string): number {
    const plusOne = (s, i) => {
        let chs = s.split('')
        let temp = chs[i]
        chs[i] = String((Number(temp) + 1) % 10)
        return chs.join('')
    }
    const minusOne = (s, i) => {
        let chs = s.split('')
        let temp = chs[i]
        chs[i] = chs[i] === '0' ? '9' : String((Number(temp) - 1) % 10)
        return chs.join('')
    }

    const q = ['0000']
    const dead = new Set(deadends)
    const visited = new Set()
    visited.add('0000')
    let step = 0
    while (q.length > 0) {
        let sz = q.length
        for (let i = 0; i < sz; i++) {
            let cur = q.shift() as string
            if (dead.has(cur)) continue
            if (cur === target) return step
            for (let j = 0; j < 4; j++) {
                let up = plusOne(cur, j)
                if (!visited.has(up)) {
                    q.push(up)
                    visited.add(up)
                }
                let down = minusOne(cur, j)
                if (!visited.has(down)) {
                    q.push(down)
                    visited.add(down)
                }
            }
        }
        step++
    }
    return -1
};
// @lc code=end

