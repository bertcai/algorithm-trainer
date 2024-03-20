/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const len = preorder.length
    function build(prel, prer, inl, inr) {
        if (prel > prer) {
            return null
        }
        const root = new TreeNode()
        root.val = preorder[prel]
        const rootIndex = inorder.indexOf(root.val)
        const leftNum = rootIndex - inl
        root.left = build(prel + 1, prel + leftNum, inl, rootIndex - 1)
        root.right = build(prel + leftNum + 1, prer, rootIndex + 1, inr)
        return root
    }
    return build(0, len - 1, 0, len - 1)
};
// @lc code=end

