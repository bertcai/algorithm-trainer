/*
 * @lc app=leetcode id=1382 lang=typescript
 *
 * [1382] Balance a Binary Search Tree
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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const nums = []
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }
    inorder(root)

    function buildBST(low, high) {
        if (low > high) return null
        const mid = Math.floor(low + (high - low) / 2)
        const cur = new TreeNode(nums[mid])
        cur.left = buildBST(low, mid - 1)
        cur.right = buildBST(mid + 1, high)
        return cur
    }
    return buildBST(0, nums.length - 1)
};
// @lc code=end

