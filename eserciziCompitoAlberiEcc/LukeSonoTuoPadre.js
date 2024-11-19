function trovaPadre(T, n) {
    // If n is root or tree is empty
    if (!T || T === n) return undefined;
    
    function search(node, target, parent) {
        // Found target node
        if (node === target) return parent;
        
        // Check children if they exist
        if (node.figli) {
            for (let child of node.figli) {
                const result = search(child, target, node);
                if (result) return result;
            }
        }
        
        return undefined;
    }
    
    return search(T, n, undefined);
}

// Example tree
const tree = {
    val: "root",
    figli: [
        {
            val: "child1",
            figli: [
                { val: "grandchild1" }
            ]
        },
        { val: "child2" }
    ]
};

const child1 = tree.figli[0];
const grandchild1 = tree.figli[0].figli[0];

console.log(trovaPadre(tree, grandchild1) === child1); // true
console.log(trovaPadre(tree, child1) === tree); // true
console.log(trovaPadre(tree, tree) === undefined); // true