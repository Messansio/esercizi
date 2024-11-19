function visita2(t, f) {
    // Base case: empty tree
    if (!t) return null;
    
    // Create new node with transformed value
    return {
        val: f(t.val),
        sx: visita2(t.sx, f),
        dx: visita2(t.dx, f)
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

// Double all values in new tree
const newTree = visita2(tree, x => x * 2);

console.log(newTree);
/* New tree:
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

console.log(tree); // Original tree unchanged