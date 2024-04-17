/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let preSum: number[] = []
    preSum[0] = 0
    nums.forEach((value, index) => {
        preSum[index + 1] = preSum[index] + value
    })
    for (let i = 0; i < nums.length; i++) {
        if (preSum[i] === preSum[nums.length] - preSum[i + 1])
            return i
    }
    return -1
};
// @lc code=end

