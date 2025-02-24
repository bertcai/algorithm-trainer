/*
 * @lc app=leetcode.cn id=232 lang=javascript
 * @lcpr version=30005
 *
 * [232] 用栈实现队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MyQueue = function () {
  this.arr1 = []
  this.arr2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.arr1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.arr2.length === 0) {
    while (this.arr1.length) {
      this.arr2.push(this.arr1.pop())
    }
  }
  return this.arr2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.arr2.length) {
    return this.arr2[this.arr2.length - 1]
  }
  return this.arr1[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.arr1.length && !this.arr2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MyQueue", "push", "push", "peek", "pop", "empty"]\n[[], [1], [2], [], [], []]\n
// @lcpr case=end

 */

