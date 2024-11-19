function visita(t, f) {
    // Base case: empty tree
    if (!t) return;
    
    // Apply function to current node
    t.val = f(t.val);
    
    // Recursively process children
    visita(t.sx, f);
    visita(t.dx, f);
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

// Double all values
visita(tree, x => x * 2);
console.log(tree);
/* Result:
{
    val: 10,
    sx: {
        val: 6,
        sx: {val: 2},
        dx: {val: 8}
    },
    dx: {
        val: 16,
        sx: {val: 12},
        dx: {val: 18}
    }
}
*/