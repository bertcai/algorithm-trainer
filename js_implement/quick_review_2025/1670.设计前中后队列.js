/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 * @lcpr version=30005
 *
 * [1670] 设计前中后队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var FrontMiddleBackQueue = function () {
  // 用两个列表表示队列的左右两部分，一遍从中间操作元素
  this.left = [];
  this.right = [];
  // 如果是奇数个元素，维护左边少右边多，所以：
  // 1、如果有偶数个元素时，pushMiddle 优先向右边添加
  // 2、如果有奇数个元素时，popMiddle 优先从右边删除
  // 3、如果只有 1 个元素，popFront 的时候，要去右边删除
};

FrontMiddleBackQueue.prototype.balance = function () {
  // 维护左边少右边多的状态，每次增删元素之后都要执行一次
  // 右边最多比左边多一个元素
  if (this.right.length > this.left.length + 1) {
    // 右边多，匀一个给左边
    this.left.push(this.right.shift());
  }
  if (this.left.length > this.right.length) {
    // 左边多，匀一个给右边
    this.right.unshift(this.left.pop());
  }
};

FrontMiddleBackQueue.prototype.size = function () {
  return this.left.length + this.right.length
}

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.left.unshift(val)
  this.balance()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.size() % 2 === 0) {
    this.right.unshift(val)
  } else {
    this.left.push(val)
  }
  this.balance()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.right.push(val)
  this.balance()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.size() === 0) return -1
  if (this.size() === 1) {
    // 如果只有 1 个元素，popFront 的时候，要去右边删除
    return this.right.shift();
  }
  const res = this.left.shift()
  this.balance()
  return res
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.size() === 0) return -1
  let res = -1
  if (this.size() % 2 === 0) {
    res = this.left.pop()
  } else {
    res = this.right.shift()
  }
  this.balance()
  return res
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.size() === 0) return -1
  const res = this.right.pop()
  this.balance()
  return res
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end



/*
// @lcpr case=start
// ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle","popBack", "popFront"][[], [1], [2], [3], [4], [], [], [], [], []]\n
// @lcpr case=end

 */

