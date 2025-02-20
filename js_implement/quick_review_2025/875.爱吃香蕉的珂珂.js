/*
 * @lc app=leetcode.cn id=875 lang=javascript
 * @lcpr version=30005
 *
 * [875] 爱吃香蕉的珂珂
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const maxPile = Math.max(...piles)
  const sumH = (piles, k) => {
    return piles.reduce((acc, cur) => acc + Math.ceil(cur / k), 0)
  }
  let left = 1, right = maxPile
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const time = sumH(piles, mid)
    if (time === h) {
      right = mid - 1
    } else if (time < h) {
      right = mid - 1
    } else if (time > h) {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end



/*
// @lcpr case=start
// [3,6,7,11]\n8\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n5\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n6\n
// @lcpr case=end

 */

