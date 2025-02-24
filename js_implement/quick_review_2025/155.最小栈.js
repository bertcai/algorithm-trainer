/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * @lcpr version=30005
 *
 * [155] 最小栈
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MinStack = function () {
  this.stack = []
  this.minStack = []
  this.min = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  this.min = Math.min(this.min, val)
  this.minStack.push(this.min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minStack.pop()
  this.min = this.minStack.length ? this.minStack[this.minStack.length - 1] : Infinity
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"][[],[-2],[0],[-3],[],[],[],[]]\n
// @lcpr case=end

 */

