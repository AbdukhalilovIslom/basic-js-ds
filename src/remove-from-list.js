const { NotImplementedError } = require('../extensions/index.js')

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
    if (!l) return null
    l.next = removeKFromList(l.next, k)
    return l.value === k ? removeKFromList(l.next, k) : l
}

module.exports = {
    removeKFromList,
}