function pota(t, k) {
    // Base case: empty tree
    if (!t) return null;
    
    // If current node value exceeds k, prune entire subtree
    if (t.val > k) return null;
    
    // Create new node with same value
    return {
        val: t.val,
        sx: pota(t.sx, k),  // Recursively prune left subtree
        dx: pota(t.dx, k)   // Recursively prune right subtree
    };
}

const tree = {
    val: 5,
    sx: {
        val: 3,
        sx: {val: 1},
        dx: {val: 4}
    },
    dx: {
        val: 8,
        sx: {val: 6},
        dx: {val: 9}
    }
};

console.log(pota(tree, 6));
// {
//     val: 5,
//     sx: {
//         val: 3,
//         sx: {val: 1},
//         dx: {val: 4}
//     },
//     dx: {
//         val: 6
//     }
// }

console.log(pota(tree, 4));
// {
//     val: 4,
//     sx: {
//         val: 3,
//         sx: {val: 1},
//         dx: {val: 4}
//     }
// }