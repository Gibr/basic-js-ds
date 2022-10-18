const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = {
      data: data,
      left: null,
      right: null
    };

    if (!this.rootNode) {
      this.rootNode = newNode;
      return
    }

    let currNode = this.rootNode;

    while ((data < currNode.data && currNode.left !== null) ||
      (data > currNode.data && currNode.right !== null)) {
      currNode = data < currNode.data ? currNode.left : currNode.right;
    }

    if (data < currNode.data) {
      currNode.left = newNode;
    } else {
      currNode.right = newNode;
    }
  }

  has(data) {
    return this.find(data) !== null
  }

  find(data, tree = this.rootNode) {
    if (tree === null) return null
    if (data === tree.data) return tree
    if (data < tree.data) return this.find(data, tree.left)
    if (data > tree.data) return this.find(data, tree.right)
  }

  remove(data) {
    const removingNode = this.find(data);
    if (!removingNode) return;

    let parentNode = null;
    let currentNode = this.rootNode;
    const queue = [];

    if (removingNode.left) queue.push(removingNode.left);
    if (removingNode.right) queue.push(removingNode.right);

    while (currentNode !== removingNode) {
      parentNode = currentNode;
      if (data < currentNode.data) currentNode = currentNode.left;
      else if (data > currentNode.data) currentNode = currentNode.right;
    }
    if (parentNode && parentNode.left === removingNode) parentNode.left = null;
    else if (parentNode && parentNode.right === removingNode) parentNode.right = null;
    else if (!parentNode) this.rootNode = null;

    while (queue.length) {
      currentNode = queue.shift();
      this.add(currentNode.data);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

  }

  min() {
    let currNode = this.rootNode;
    if (!currNode) return null
    while (currNode.left) currNode = currNode.left;
    return currNode.data
  }

  max() {
    let currNode = this.rootNode;
    if (!currNode) return null
    while (currNode.right) currNode = currNode.right;
    return currNode.data
  }
}

module.exports = {
  BinarySearchTree
};