/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const len = nums.length
    let slow = 0, fast = 0
    while (fast < len) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
            fast++
        } else {
            fast++
        }
    }
    return slow
};
// @lc code=end

