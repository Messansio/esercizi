/**
 * Tree traversal functions collection for both generic trees and binary trees.
 */

/**
 * Performs a pre-order traversal of a tree.
 * Visits the current node first, then recursively traverses all children.
 * @param {Object} node - The current tree node
 * @param {Function} callback - Function to execute on each node
 * @returns {void}
 */

/**
 * Performs a post-order traversal of a tree.
 * Recursively traverses all children first, then visits the current node.
 * @param {Object} node - The current tree node
 * @param {Function} callback - Function to execute on each node
 * @returns {void}
 */

/**
 * Performs an in-order traversal of a binary tree.
 * Traverses left subtree, visits the current node, then traverses right subtree.
 * Only works with binary trees where nodes have 'left' and 'right' properties.
 * @param {Object} node - The current binary tree node
 * @param {Function} callback - Function to execute on each node
 * @returns {void}
 */
function traversePreOrder(node, callback) {
    if (!node) return;
    callback(node);
    for (let child of node.children) {
        traversePreOrder(child, callback);
    }
}

function traversePostOrder(node, callback) {
    if (!node) return;
    for (let child of node.children) {
        traversePreOrder(child, callback);
    }
    callback(node);
}

//SOLO SU BINARY TREE
function traverseInOrder(node, callback) {
    if (!node) return;
    if (node.left) traverseInOrder(node.left, callback);
    callback(node);
    if (node.right) traverseInOrder(node.right, callback);
}

