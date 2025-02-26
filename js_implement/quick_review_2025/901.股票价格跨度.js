/*
 * @lc app=leetcode.cn id=901 lang=javascript
 * @lcpr version=30005
 *
 * [901] 股票价格跨度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var StockSpanner = function () {
  this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1
  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    let prev = this.stack.pop()
    count += prev[1]
  }
  this.stack.push([price, count])
  return count
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end



/*
// @lcpr case=start
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"][[], [100], [80], [60], [70], [60], [75], [85]]\n
// @lcpr case=end

 */

