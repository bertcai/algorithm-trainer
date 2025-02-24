/*
 * @lc app=leetcode.cn id=225 lang=javascript
 * @lcpr version=30005
 *
 * [225] 用队列实现栈
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MyStack = function () {
  this.q = []
  this.top_elem = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x)
  this.top_elem = x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.q.length
  while (size > 2) {
    this.q.push(this.q.shift())
    size--
  }
  this.top_elem = this.q[0]
  this.q.push(this.q.shift())
  return this.q.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.top_elem
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MyStack", "push", "push", "top", "pop", "empty"][[], [1], [2], [], [], []]\n
// @lcpr case=end

 */

