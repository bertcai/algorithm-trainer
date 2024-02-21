/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function palindrome(sarr: Array<String>, left, right): boolean {
    while (left < right) {
        if (sarr[left] !== sarr[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
function validPalindrome(s: string): boolean {
    let left, right;
    const sarr = s.split('')
    left = 0
    right = sarr.length - 1
    // 1. 左右逼近到不对称的字符点
    while (left < right && sarr[left] === sarr[right]) {
        left++
        right--
    }
    // 2. 判断跳过不对称的某个点后剩下子串是否对称
    if (palindrome(sarr, left + 1, right)) {
        return true
    }
    if (palindrome(sarr, left, right - 1)) {
        return true
    }
    return false
};
// @lc code=end

