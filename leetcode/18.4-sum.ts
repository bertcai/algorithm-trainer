/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    nums = nums.sort((a, b) => a - b)
    const nSum = (nums: number[], n: number, start: number, target: number) => {
        const res: number[][] = []
        if (n === 2) {
            let low = start, high = nums.length - 1
            while (low < high) {
                let left = nums[low], right = nums[high]
                const sum = left + right
                if (sum < target) {
                    while (low < high && nums[low] === left) low++
                } else if (sum > target) {
                    while (low < high && nums[high] === right) high--
                } else {
                    res.push([left, right])
                    // console.log(res, 'left:', left, 'high:', high)
                    while (low < high && nums[low] === left) low++
                    while (low < high && nums[high] === right) high--
                }
            }
            return res
        } else {
            for (let i = start; i < nums.length; i++) {
                let temp = nSum(nums, n - 1, i + 1, target - nums[i])
                temp = temp.map(item => [nums[i], ...item])
                res.push(...temp)
                while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++
            }
            return res
        }
    }
    return nSum(nums, 4, 0, target)
};
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// @lc code=end

