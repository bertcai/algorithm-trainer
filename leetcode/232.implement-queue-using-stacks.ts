/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
    inStack: number[]
    outStack: number[]
    constructor() {
        this.inStack = []
        this.outStack = []
    }

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number | undefined {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop() as number)
            }
        }
        return this.outStack.pop()
    }

    peek(): number | undefined {
        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop() as number)
            }
        }
        return this.outStack[this.outStack.length - 1]
    }

    empty(): boolean {
        return this.inStack.length || this.outStack.length ? false : true
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

