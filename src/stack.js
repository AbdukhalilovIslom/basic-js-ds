const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();

 */
class Stack {
    constructor() {
        this.stack = []
    }

    push(element) {
        this.stack.push(element)
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }
}

module.exports = {
    Stack,
}