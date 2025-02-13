/*
 * @lc app=leetcode.cn id=264 lang=javascript
 * @lcpr version=30005
 *
 * [264] 丑数 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let p2 = 1, p3 =1, p5 =1
  let product2 = 1, product3 = 1, product5 =1
  let res = [-1]
  let p = 1
  while(p <=n){
    const min = Math.min(Math.min(product2,product3), product5)
    res.push(min)
    p++
    if(min === product2){
      product2 = res[p2]*2
      p2++
    }
    if(min === product3){
      product3 = res[p3]*3
      p3++
    }
    if(min === product5){
      product5 = res[p5]*5
      p5++
    }
  }
  return res[n]
};
// @lc code=end



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

