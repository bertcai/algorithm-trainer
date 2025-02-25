/*
 * @lc app=leetcode.cn id=2073 lang=javascript
 * @lcpr version=30005
 *
 * [2073] 买票需要的时间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let res = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      // 前面的人最多买了 tickets[k] 张票
      res += Math.min(tickets[k], tickets[i]);
    } else {
      // 前面的人最多买了 tickets[k] - 1 张票
      res += Math.min(tickets[k] - 1, tickets[i]);
    }
  }
  return res;
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,1]\n0\n
// @lcpr case=end

 */

