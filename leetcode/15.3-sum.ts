/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b)
    const result: number[][] = []
    let cur1, cur2
    for (let i = 0; i < nums.length - 2; i++) {
        let temp = nums[i]
        cur1 = i + 1
        cur2 = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        while (cur1 < cur2) {
            if (temp + nums[cur1] + nums[cur2] === 0) {
                result.push([temp, nums[cur1], nums[cur2]])
                while (cur2 > cur1 && nums[cur2] == nums[cur2 - 1]) cur2--;
                while (cur2 > cur1 && nums[cur1] == nums[cur1 + 1]) cur1++;
                cur1++
                cur2--
                continue
            } else if (temp + nums[cur1] + nums[cur2] > 0) {
                cur2--
            } else {
                cur1++
            }
        }
    }
    return result
}
// @lc code=end

