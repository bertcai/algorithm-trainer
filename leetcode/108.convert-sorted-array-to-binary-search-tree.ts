/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) return null

    const root = buildBST(0, nums.length - 1)

    function buildBST(low, high) {
        if (low > high) return null

        const mid = Math.floor(low + (high - low) / 2)
        const cur = new TreeNode(nums[mid])
        cur.left = buildBST(low, mid - 1)
        cur.right = buildBST(mid + 1, high)
        return cur
    }
    return root
};
// @lc code=end

