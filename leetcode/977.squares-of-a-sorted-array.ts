/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
    // let mid = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] >= 0) {
    //         mid = i
    //         break
    //     }
    // }
    // if (nums[0] >= 0) {
    //     return nums.map(k => k * k)
    // }
    // if (nums[nums.length - 1] <= 0) {
    //     return nums.reverse().map(k => k * k)
    // }
    // let cur1 = 0
    // let cur2 = nums.length - 1
    // let last = nums.length - 1
    // const res = new Array(nums.length)
    // while (cur1 <= mid - 1 && cur2 >= mid) {
    //     if (nums[cur1] * nums[cur1] > nums[cur2] * nums[cur2]) {
    //         res[last] = nums[cur1] * nums[cur1]
    //         last--
    //         cur1++
    //     } else {
    //         res[last] = nums[cur2] * nums[cur2]
    //         last--
    //         cur2--
    //     }
    // }
    // while (cur1 <= mid - 1) {
    //     res[last] = nums[cur1] * nums[cur1]
    //     last--
    //     cur1++
    // }
    // while (cur2 >= mid) {
    //     res[last] = nums[cur2] * nums[cur2]
    //     last--
    //     cur2--
    // }
    // return res
    let i = 0, j = nums.length - 1
    const res = new Array(nums.length)
    let last = nums.length - 1
    while (i <= j) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            res[last] = nums[i] * nums[i]
            i++
            last--
        } else {
            res[last] = nums[j] * nums[j]
            j--
            last--
        }
    }
    return res
};
// @lc code=end

