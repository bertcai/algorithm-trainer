/*
 * @lc app=leetcode.cn id=344 lang=javascript
 * @lcpr version=30005
 *
 * [344] 反转字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length-1
    while(left < right){
      [s[left], s[right]] = [s[right], s[left]]
      left++
      right--
    }
};
// @lc code=end



/*
// @lcpr case=start
// ["h","e","l","l","o"]\n
// @lcpr case=end

// @lcpr case=start
// ["H","a","n","n","a","h"]\n
// @lcpr case=end

 */

