/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = []
    const result: number[] = []
    let len = nums.length
    for (let i = 0; i < len; i++) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop()
        }
        queue.push(i)
        while (queue.length && queue[0] <= i - k) {
            queue.shift()
        }
        if (i >= k - 1) {
            result.push(nums[queue[0]])
        }
    }
    return result
};
// @lc code=end

