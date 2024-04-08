/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let slow = 1, fast = 1
    let len = nums.length
    if (len === 0) return 0
    while (fast < len) {
        if (nums[fast] !== nums[fast - 1]) {
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

