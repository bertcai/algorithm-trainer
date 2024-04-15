/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b)
    const twoSum = (nums, start, target) => {
        let low = start, high = nums.length - 1
        const res: number[][] = []
        while (low < high) {
            const sum = nums[low] + nums[high]
            const left = nums[low], right = nums[high]
            if (sum < target) {
                while (low < high && nums[low] === left) low++
            } else if (sum > target) {
                while (low < high && nums[high] === right) high--
            } else {
                res.push([nums[low], nums[high]])
                while (low < high && nums[low] === left) low++
                while (low < high && nums[high] === right) high--
            }
        }
        return res
    }
    const res: number[][] = []
    for (let i = 0; i < nums.length; i++) {
        const target2 = 0 - nums[i]
        let cache = nums[i]
        let temp = twoSum(nums, i + 1, target2)
        temp = temp.map(item => [nums[i], ...item])
        res.push(...temp)
        while (i + 1 < nums.length && nums[i + 1] === cache) i++
    }
    return res
}
// @lc code=end

