/*
 * @lc app=leetcode id=211 lang=typescript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start
class WordDictionary {
    word: {}
    constructor() {
        this.word = {}
    }

    addWord(word: string): void {
        const len = word.length
        if (!this.word[len]) {
            this.word[len] = []
        }
        this.word[len].push(word)
    }

    search(word: string): boolean {
        const len = word.length
        if (!this.word[len]) {
            return false
        }
        if (word.includes('.')) {
            const reg = new RegExp(word)
            return this.word[len].some(item => reg.test(item))
        } else {
            return this.word[len].includes(word)
        }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

