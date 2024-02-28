/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = []
    const queue = []
    if (!root) {
        return []
    }
    const cur = root
    queue.push(root)
    while (queue.length) {
        const level = []
        const len = queue.length
        for (let i = 0; i < len; i++) { // 将该层数据取出放到level中
            const top = queue.shift()
            level.push(top.val)
            // 将下一层入队
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }
        }
        res.push(level)
    }
    return res
};
// @lc code=end

