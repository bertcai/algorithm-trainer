/*
 * @lc app=leetcode id=450 lang=typescript
 *
 * [450] Delete Node in a BST
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
        return root
    }
    if (root.val === key) {
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            const maxLeft = findMax(root.left)
            root.val = maxLeft.val
            root.left = deleteNode(root.left, maxLeft.val)
        } else {
            const minRight = findMin(root.right)
            root.val = minRight.val
            root.right = deleteNode(root.right, minRight.val)
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root
};

function findMax(root) {
    while (root.right) {
        root = root.right
    }
    return root
}

function findMin(root) {
    while (root.left) {
        root = root.left
    }
    return root
}
// @lc code=end

