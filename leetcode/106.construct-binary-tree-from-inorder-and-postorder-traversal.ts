/*
 * @lc app=leetcode id=106 lang=typescript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const len = postorder.length
    function build(postL, postR, inL, inR) {
        if (postL > postR) {
            return null
        }
        const root = new TreeNode()
        root.val = postorder[postR]
        const mid = inorder.indexOf(root.val)
        const leftNum = mid - inL
        root.left = build(postL, postL + leftNum - 1, inL, mid - 1)
        root.right = build(postL + leftNum, postR - 1, mid + 1, inR)
        return root
    }
    return build(0, len - 1, 0, len - 1)
};
// @lc code=end

