/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    stack: number[]
    minStack: number[]
    length: number
    constructor() {
        this.stack = []
        this.minStack = []
        this.length = 0
    }

    push(val: number): void {
        this.stack.push(val)
        this.length++
        if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val)
        }
    }

    pop(): void {
        const temp = this.stack.pop()
        this.length--
        if (this.minStack[this.minStack.length - 1] === temp) {
            this.minStack.pop()
        }
    }

    top(): number {
        return this.stack[this.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

