/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords(s: string): string {
    // 暴力解法
    // let word: string[] = []
    // let res: string[] = []
    // s = s.trim()
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] !== ' ') {
    //         word.push(s[i])
    //     } else {
    //         if (word.length === 0) continue
    //         res.push(word.join(''))
    //         word = []
    //     }
    // }
    // res.push(word.join(''))
    // return res.reverse().join(' ')

    s = s.trim()
    s = s.split('').reverse().join('')
    s = s.split(' ').filter(item => item)
        .map(item => item.split('').reverse().join('')).join(' ')
    return s
};
// @lc code=end

