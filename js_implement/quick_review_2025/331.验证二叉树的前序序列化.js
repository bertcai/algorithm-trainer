/*
 * @lc app=leetcode.cn id=331 lang=javascript
 * @lcpr version=30100
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  // 将字符串转化成列表
  const nodes = preorder.split(",");
  return deserialize(nodes) && nodes.length === 0;

};
function deserialize(nodes) {
  if (nodes.length === 0) return false

  // ***** 前序遍历位置 *****
  // 列表最左侧就是根节点
  let first = nodes.shift();
  if (first === "#") return true;
  // *********************

  return deserialize(nodes) && deserialize(nodes);
}
// @lc code=end



/*
// @lcpr case=start
// "9,3,4,#,#,1,#,#,2,#,6,#,#"\n
// @lcpr case=end

// @lcpr case=start
// "1,#"\n
// @lcpr case=end

// @lcpr case=start
// "9,#,#,1"\n
// @lcpr case=end

 */

