/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const len = nums.length
    let slow = 0, fast = 0
    while (fast < len) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
            fast++
        } else {
            fast++
        }
    }
    while (slow < len) {
        nums[slow] = 0
        slow++
    }
};
// @lc code=end

