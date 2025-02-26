/*
 * @lc app=leetcode.cn id=853 lang=javascript
 * @lcpr version=30005
 *
 * [853] 车队
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const carTuple = []
  const n = position.length
  for (let i = 0; i < n; i++) {
    carTuple.push([position[i], speed[i]])
  }
  carTuple.sort((a, b) => a[0] - b[0])
  const timeArray = carTuple.map(tuple => (target - tuple[0]) / tuple[1])
  let res = 0
  let maxtime = 0
  for (let i = n - 1; i >= 0; i--) {
    if (timeArray[i] > maxtime) {
      maxtime = timeArray[i]
      res++
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// 12\n[10,8,0,5,3]\n[2,4,1,1,3]\n
// @lcpr case=end

// @lcpr case=start
// 10\n[3]\n[3]\n
// @lcpr case=end

// @lcpr case=start
// 100\n[0,2,4]\n[4,2,1]\n
// @lcpr case=end

 */

