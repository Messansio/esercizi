function printTree(node, prefix = "", isLeft = true) {
    if (node === null) {
        console.log("Empty tree");
        return;
    }

    if (node.dx !== null) {
        printTree(node.dx, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.val);

    if (node.sx !== null) {
        printTree(node.sx, prefix + (isLeft ? "    " : "│   "), true);
    }
}

module.exports = { printTree };