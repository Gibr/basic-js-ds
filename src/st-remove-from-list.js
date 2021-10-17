const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(list, k) {
  let currentNode = list;
  let parentNode = null;
  while (currentNode) {
    if (currentNode.value === k) {
      if (parentNode) parentNode.next = currentNode.next;
      else list = currentNode.next;
    }
    parentNode = currentNode;
    currentNode = currentNode.next;
  }

  return list
}
