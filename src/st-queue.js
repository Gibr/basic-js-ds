const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.queueHead = new ListNode();
    this.queueTail = this.queueHead;
  }

  getUnderlyingList() {
    return this.queueHead
  }

  enqueue( value ) {
    if (!this.queueHead.value) {
      this.queueHead.value = value;
    } else {
      this.queueTail.next = new ListNode(value);
      this.queueTail = this.queueTail.next;
    }
  }

  dequeue() {
    let result = this.queueHead.value;
    this.queueHead = this.queueHead.next;
    return result
  }

}
