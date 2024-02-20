/**
 * Tree Traversal
 * 1. Preorder 根节点 -> 左子树 -> 右子树
 * 2. Inorder 左子树 -> 根节点 -> 右子树
 * 3. Postorder 左子树 -> 右子树 -> 根节点
 * 均为递归实现
 */

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}

function preorder(root: TreeNode | null){
    if(!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

function inorder(root: TreeNode | null){
    if(!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

function postorder(root: TreeNode | null){
    if(!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

console.log('preorder');
preorder(tree);
console.log('inorder');
inorder(tree);
console.log('postorder');
postorder(tree);