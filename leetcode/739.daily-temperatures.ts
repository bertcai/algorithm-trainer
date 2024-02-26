/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    let result = new Array(temperatures.length).fill(0)
    let stack: number[] = []
    let len = temperatures.length
    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop() as number
            result[top] = i - top
        }
        stack.push(i)
    }
    return result
};
// @lc code=end

