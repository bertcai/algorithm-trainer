/*
 * @lc app=leetcode.cn id=297 lang=javascript
 * @lcpr version=30005
 *
 * [297] 二叉树的序列化与反序列化
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // const res = []
  // const traverse = (node) => {
  //   if (!node) {
  //     res.push('null')
  //     return
  //   }
  //   res.push(node.val)
  //   traverse(node.left)
  //   traverse(node.right)
  // }
  // traverse(root)
  // console.log(res)
  // return res.join(',')
  if (!root) return ''
  const res = []
  const q = []
  q.push(root)
  while (q.length) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const cur = q.shift()
      if (!cur) {
        res.push('null')
        continue
      }
      res.push(cur.val)
      q.push(cur.left)
      q.push(cur.right)
    }
  }
  // console.log(res)
  return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // const treeArray = data.split(',')
  // const buildTree = (treeArray) => {
  //   if (!treeArray.length) return null
  //   const first = treeArray.shift()
  //   if (first === 'null') return null
  //   const root = new TreeNode(parseInt(first))
  //   root.left = buildTree(treeArray)
  //   root.right = buildTree(treeArray)
  //   return root
  // }
  // return buildTree(treeArray)
  if (!data.length) return null
  const treeArray = data.split(',')
  const pq = []
  const root = new TreeNode(parseInt(treeArray[0]))
  pq.push(root)
  let index = 1
  while (pq.length) {
    const size = pq.length
    for (let i = 0; i < size; i++) {
      const parent = pq.shift()
      const left = treeArray[index++]
      if (left !== 'null') {
        parent.left = new TreeNode(parseInt(left))
        pq.push(parent.left)
      }
      const right = treeArray[index++]
      if (right !== 'null') {
        parent.right = new TreeNode(parseInt(right))
        pq.push(parent.right)
      }
    }
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

