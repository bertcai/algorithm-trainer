/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    nums: number[]
    preSums: number[]
    constructor(nums: number[]) {
        this.nums = [...nums]
        this.preSums = []
        this.preSums[0] = 0
        this.nums.forEach((value, index) => {
            this.preSums[index + 1] = this.preSums[index] + value
        })
        console.log(this.preSums)
    }

    sumRange(left: number, right: number): number {
        return this.preSums[right + 1] - this.preSums[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

