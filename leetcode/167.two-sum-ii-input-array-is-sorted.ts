/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        let sum = numbers[left] + numbers[right]
        let mid = Math.floor((left + right) / 2)
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
};
// @lc code=end

